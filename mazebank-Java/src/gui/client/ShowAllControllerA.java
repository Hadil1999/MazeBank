package gui.client;

import entities.Assurance;
import services.AssuranceService;
import utils.Constants;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.geometry.Pos;
import javafx.scene.Parent;
import javafx.scene.control.ComboBox;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.VBox;
import javafx.scene.text.Text;

import java.io.IOException;
import java.net.URL;
import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.ResourceBundle;

public class ShowAllControllerA implements Initializable {

    public static Assurance currentAssurance;

    @FXML
    public Text topText;
    @FXML
    public VBox mainVBox;
    @FXML
    public ComboBox<String> sortCB;

    List<Assurance> listAssurance;

    @Override
    public void initialize(URL url, ResourceBundle rb) {
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
            parent = FXMLLoader.load(Objects.requireNonNull(getClass().getResource(Constants.FXML_FRONT_MODEL_ASSURANCE)));

            HBox innerContainer = ((HBox) ((AnchorPane) ((AnchorPane) parent).getChildren().get(0)).getChildren().get(0));
            ((Text) innerContainer.lookup("#libelleText")).setText("Libelle : " + assurance.getLibelle());

            ((Text) innerContainer.lookup("#partenaireText")).setText("Partenaire : " + assurance.getPartenaire());
            ((Text) innerContainer.lookup("#typeText")).setText("Type : " + assurance.getType());
            Path selectedImagePath = FileSystems.getDefault().getPath(assurance.getImage());
            if (selectedImagePath.toFile().exists()) {
                ((ImageView) innerContainer.lookup("#imageIV")).setImage(new Image(selectedImagePath.toUri().toString()));
            }

        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        }
        return parent;
    }

    @FXML
    public void sort(ActionEvent ignored) {
        Constants.compareVar = sortCB.getValue();
        Collections.sort(listAssurance);
        displayData();
    }

}
