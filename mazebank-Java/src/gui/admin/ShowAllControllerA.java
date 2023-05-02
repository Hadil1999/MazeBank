package gui.admin;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
import entities.Assurance;
import services.AssuranceService;
import utils.AlertUtils;
import utils.Constants;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.geometry.Pos;
import javafx.scene.Parent;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.control.ButtonType;
import javafx.scene.control.ComboBox;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.scene.text.Text;
import javafx.stage.FileChooser;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;

import java.awt.*;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URL;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.*;

public class ShowAllControllerA implements Initializable {

    public static Assurance currentAssurance;

    @FXML
    public Text topText;
    @FXML
    public Button addButton;
    @FXML
    public VBox mainVBox;
    @FXML
    public ComboBox<String> sortCB;
    @FXML
    public Button exelButton;

    List<Assurance> listAssurance;

    @Override
    public void initialize(URL url, ResourceBundle rb) {
        exelButton.setTextFill(Color.WHITE);

        listAssurance = AssuranceService.getInstance().getAll();
        sortCB.getItems().addAll("Libelle", "Partenaire", "Type");
        displayData();
    }

    void displayData() {
        mainVBox.getChildren().clear();

        Collections.reverse(listAssurance);

        if (!listAssurance.isEmpty()) {
            for (Assurance assurance : listAssurance) {

                mainVBox.getChildren().add(makeAssuranceModel(assurance));

            }
        } else {
            StackPane stackPane = new StackPane();
            stackPane.setAlignment(Pos.CENTER);
            stackPane.setPrefHeight(200);
            stackPane.getChildren().add(new Text("Aucune donnée"));
            mainVBox.getChildren().add(stackPane);
        }
    }

    public Parent makeAssuranceModel(
            Assurance assurance
    ) {
        Parent parent = null;
        try {
            parent = FXMLLoader.load(Objects.requireNonNull(getClass().getResource(Constants.FXML_BACK_MODEL_ASSURANCE)));

            HBox innerContainer = ((HBox) ((AnchorPane) ((AnchorPane) parent).getChildren().get(0)).getChildren().get(0));
            ((Text) innerContainer.lookup("#libelleText")).setText("Libelle : " + assurance.getLibelle());

            ((Text) innerContainer.lookup("#partenaireText")).setText("Partenaire : " + assurance.getPartenaire());
            ((Text) innerContainer.lookup("#typeText")).setText("Type : " + assurance.getType());
            Path selectedImagePath = FileSystems.getDefault().getPath(assurance.getImage());
            if (selectedImagePath.toFile().exists()) {
                ((ImageView) innerContainer.lookup("#imageIV")).setImage(new Image(selectedImagePath.toUri().toString()));
            }

            ((Button) innerContainer.lookup("#editButton")).setOnAction((event) -> modifierAssurance(assurance));
            ((Button) innerContainer.lookup("#deleteButton")).setOnAction((event) -> supprimerAssurance(assurance));
            ((Button) innerContainer.lookup("#pdfButton")).setOnAction((event) -> genererPDF(assurance));

        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        }
        return parent;
    }

    @FXML
    private void ajouterAssurance(ActionEvent ignored) {
        currentAssurance = null;
        MainWindowControllerAdmin.getInstance().loadInterface(Constants.FXML_BACK_MANAGE_ASSURANCE);
    }

    private void modifierAssurance(Assurance assurance) {
        currentAssurance = assurance;
        MainWindowControllerAdmin.getInstance().loadInterface(Constants.FXML_BACK_MANAGE_ASSURANCE);
    }

    private void supprimerAssurance(Assurance assurance) {
        currentAssurance = null;

        Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
        alert.setTitle("Confirmer la suppression");
        alert.setHeaderText(null);
        alert.setContentText("Etes vous sûr de vouloir supprimer assurance ?");
        Optional<ButtonType> action = alert.showAndWait();

        if (action.isPresent()) {
            if (action.get() == ButtonType.OK) {
                if (AssuranceService.getInstance().delete(assurance.getId())) {
                    MainWindowControllerAdmin.getInstance().loadInterface(Constants.FXML_BACK_DISPLAY_ALL_ASSURANCE);
                } else {
                    AlertUtils.makeError("Could not delete assurance");
                }
            }
        }
    }


    @FXML
    public void sort(ActionEvent ignored) {
        Constants.compareVar = sortCB.getValue();
        Collections.sort(listAssurance);
        displayData();
    }

    private void genererPDF(Assurance assurance) {
        Document document = new Document();
        try {
            PdfWriter writer = PdfWriter.getInstance(document, Files.newOutputStream(Paths.get("assurance.pdf")));
            document.open();

            com.itextpdf.text.Font font = new com.itextpdf.text.Font();
            font.setSize(20);

            document.add(new Paragraph("- Assurance -"));

            try {
                com.itextpdf.text.Image image = com.itextpdf.text.Image.getInstance(assurance.getImage());
                image.scaleAbsoluteWidth(300);
                image.scaleAbsoluteHeight(300);
                image.isScaleToFitHeight();
                document.add(image);
            } catch (FileNotFoundException e) {
                AlertUtils.makeError("Image not found, PDF will display without image");
            }

            document.add(new Paragraph("Libelle : " + assurance.getLibelle()));
            document.add(new Paragraph("Partenaire : " + assurance.getPartenaire()));
            document.add(new Paragraph("Type : " + assurance.getType()));
            document.newPage();
            document.close();

            writer.close();

            Desktop.getDesktop().open(new File("assurance.pdf"));
        } catch (DocumentException | IOException e) {
            e.printStackTrace();
        }
    }

    public void genererExcel(ActionEvent ignored) {
        HSSFWorkbook workbook = new HSSFWorkbook();
        try {
            FileChooser chooser = new FileChooser();
            // Set extension filter
            FileChooser.ExtensionFilter filter = new FileChooser.ExtensionFilter("Excel Files(.xls)", ".xls");
            chooser.getExtensionFilters().add(filter);

            HSSFSheet workSheet = workbook.createSheet("sheet 0");
            workSheet.setColumnWidth(1, 25);

            HSSFFont fontBold = workbook.createFont();
            fontBold.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
            HSSFCellStyle styleBold = workbook.createCellStyle();
            styleBold.setFont(fontBold);

            Row row1 = workSheet.createRow((short) 0);
            row1.createCell(0).setCellValue("Image");
            row1.createCell(1).setCellValue("Libelle");
            row1.createCell(2).setCellValue("Partenaire");
            row1.createCell(3).setCellValue("Type");

            int i = 0;
            for (Assurance assurance : listAssurance) {
                i++;
                Row row2 = workSheet.createRow((short) i);
                row2.createCell(0).setCellValue(assurance.getImage());
                row2.createCell(1).setCellValue(assurance.getLibelle());
                row2.createCell(2).setCellValue(assurance.getPartenaire());
                row2.createCell(3).setCellValue(assurance.getType());
            }

            workSheet.autoSizeColumn(1);
            workSheet.autoSizeColumn(2);
            workSheet.autoSizeColumn(3);
            workSheet.autoSizeColumn(4);

            workbook.write(Files.newOutputStream(Paths.get("assurance.xls")));
            Desktop.getDesktop().open(new File("assurance.xls"));

        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}