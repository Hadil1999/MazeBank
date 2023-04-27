package com.mazebank.gui.back.assurance;

import com.mazebank.MainApp;
import com.mazebank.entities.Assurance;
import com.mazebank.gui.back.MainWindowController;
import com.mazebank.services.AssuranceService;
import com.mazebank.utils.AlertUtils;
import com.mazebank.utils.Constants;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.text.Text;
import javafx.stage.FileChooser;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.nio.file.*;
import java.util.ResourceBundle;

public class ManageController implements Initializable {

    @FXML
    public TextField libelleTF;
    @FXML
    public ImageView imageIV;
    @FXML
    public TextField partenaireTF;
    @FXML
    public TextField typeTF;
    @FXML
    public Button btnAjout;
    @FXML
    public Text topText;

    Assurance currentAssurance;
    Path selectedImagePath;
    boolean imageEdited;

    @Override
    public void initialize(URL url, ResourceBundle rb) {

        currentAssurance = ShowAllController.currentAssurance;

        if (currentAssurance != null) {
            topText.setText("Modifier assurance");
            btnAjout.setText("Modifier");

            try {
                libelleTF.setText(currentAssurance.getLibelle());
                selectedImagePath = FileSystems.getDefault().getPath(currentAssurance.getImage());
                if (selectedImagePath.toFile().exists()) {
                    imageIV.setImage(new Image(selectedImagePath.toUri().toString()));
                }
                partenaireTF.setText(currentAssurance.getPartenaire());
                typeTF.setText(currentAssurance.getType());

            } catch (NullPointerException ignored) {
                System.out.println("NullPointerException");
            }
        } else {
            topText.setText("Ajouter assurance");
            btnAjout.setText("Ajouter");
        }
    }

    @FXML
    private void manage(ActionEvent ignored) {

        if (controleDeSaisie()) {

            String imagePath;
            if (imageEdited) {
                imagePath = currentAssurance.getImage();
            } else {
                createImageFile();
                imagePath = selectedImagePath.toString();
            }

            Assurance assurance = new Assurance(
                    libelleTF.getText(),
                    imagePath,
                    partenaireTF.getText(),
                    typeTF.getText()
            );

            if (currentAssurance == null) {
                if (AssuranceService.getInstance().add(assurance)) {
                    AlertUtils.makeSuccessNotification("Assurance ajouté avec succés");
                    MainWindowController.getInstance().loadInterface(Constants.FXML_BACK_DISPLAY_ALL_ASSURANCE);
                } else {
                    AlertUtils.makeError("Error");
                }
            } else {
                assurance.setId(currentAssurance.getId());
                if (AssuranceService.getInstance().edit(assurance)) {
                    AlertUtils.makeSuccessNotification("Assurance modifié avec succés");
                    ShowAllController.currentAssurance = null;
                    MainWindowController.getInstance().loadInterface(Constants.FXML_BACK_DISPLAY_ALL_ASSURANCE);
                } else {
                    AlertUtils.makeError("Error");
                }
            }

            if (selectedImagePath != null) {
                createImageFile();
            }
        }
    }

    @FXML
    public void chooseImage(ActionEvent ignored) {

        final FileChooser fileChooser = new FileChooser();
        File file = fileChooser.showOpenDialog(MainApp.mainStage);
        if (file != null) {
            selectedImagePath = Paths.get(file.getPath());
            imageIV.setImage(new Image(file.toURI().toString()));
        }
    }

    public void createImageFile() {
        try {
            Path newPath = FileSystems.getDefault().getPath("src/com/mazebank/images/uploads/" + selectedImagePath.getFileName());
            Files.copy(selectedImagePath, newPath, StandardCopyOption.REPLACE_EXISTING);
            selectedImagePath = newPath;
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private boolean controleDeSaisie() {


        if (libelleTF.getText().isEmpty()) {
            AlertUtils.makeInformation("libelle ne doit pas etre vide");
            return false;
        }


        if (selectedImagePath == null) {
            AlertUtils.makeInformation("Veuillez choisir une image");
            return false;
        }


        if (partenaireTF.getText().isEmpty()) {
            AlertUtils.makeInformation("partenaire ne doit pas etre vide");
            return false;
        }


        if (typeTF.getText().isEmpty()) {
            AlertUtils.makeInformation("type ne doit pas etre vide");
            return false;
        }


        return true;
    }
}