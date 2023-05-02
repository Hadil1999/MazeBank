package gui.admin;


import entities.Embauche;
import gui.admin.MainWindowControllerAdmin;
import services.EmbaucheService;
import utils.AlertUtils;
import utils.Constants;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.DatePicker;
import javafx.scene.control.TextField;
import javafx.scene.text.Text;

import java.net.URL;
import java.util.ResourceBundle;

public class ManageControllerE implements Initializable {

    @FXML
    public TextField posteTF;
    @FXML
    public DatePicker dateEmbaucheDP;
    @FXML
    public TextField salaireTF;
    @FXML
    public TextField dureeTF;
    @FXML
    public Button btnAjout;
    @FXML
    public Text topText;

    Embauche currentEmbauche;


    @Override
    public void initialize(URL url, ResourceBundle rb) {

        currentEmbauche = ShowAllControllerE.currentEmbauche;

        if (currentEmbauche != null) {
            topText.setText("Modifier embauche");
            btnAjout.setText("Modifier");

            try {
                posteTF.setText(currentEmbauche.getPoste());
                dateEmbaucheDP.setValue(currentEmbauche.getDateEmbauche());
                salaireTF.setText(String.valueOf(currentEmbauche.getSalaire()));
                dureeTF.setText(String.valueOf(currentEmbauche.getDuree()));

            } catch (NullPointerException ignored) {
                System.out.println("NullPointerException");
            }
        } else {
            topText.setText("Ajouter embauche");
            btnAjout.setText("Ajouter");
        }
    }

    @FXML
    private void manage(ActionEvent ignored) {

        if (controleDeSaisie()) {

            Embauche embauche = new Embauche(
                    posteTF.getText(),
                    dateEmbaucheDP.getValue(),
                    Float.parseFloat(salaireTF.getText()),
                    Integer.parseInt(dureeTF.getText())
            );

            if (currentEmbauche == null) {
                if (EmbaucheService.getInstance().add(embauche)) {
                    AlertUtils.makeSuccessNotification("Embauche ajouté avec succés");
                    MainWindowControllerAdmin.getInstance().loadInterface(Constants.FXML_BACK_DISPLAY_ALL_EMBAUCHE);
                } else {
                    AlertUtils.makeError("Error");
                }
            } else {
                embauche.setId(currentEmbauche.getId());
                if (EmbaucheService.getInstance().edit(embauche)) {
                    AlertUtils.makeSuccessNotification("Embauche modifié avec succés");
                    ShowAllControllerE.currentEmbauche = null;
                    MainWindowControllerAdmin.getInstance().loadInterface(Constants.FXML_BACK_DISPLAY_ALL_EMBAUCHE);
                } else {
                    AlertUtils.makeError("Error");
                }
            }

        }
    }


    private boolean controleDeSaisie() {


        if (posteTF.getText().isEmpty()) {
            AlertUtils.makeInformation("poste ne doit pas etre vide");
            return false;
        }


        if (dateEmbaucheDP.getValue() == null) {
            AlertUtils.makeInformation("Choisir une date pour dateEmbauche");
            return false;
        }


        if (salaireTF.getText().isEmpty()) {
            AlertUtils.makeInformation("salaire ne doit pas etre vide");
            return false;
        }


        try {
            Float.parseFloat(salaireTF.getText());
        } catch (NumberFormatException ignored) {
            AlertUtils.makeInformation("salaire doit etre un réel");
            return false;
        }
        if (dureeTF.getText().isEmpty()) {
            AlertUtils.makeInformation("duree ne doit pas etre vide");
            return false;
        }


        try {
            Integer.parseInt(dureeTF.getText());
        } catch (NumberFormatException ignored) {
            AlertUtils.makeInformation("duree doit etre un nombre");
            return false;
        }

        return true;
    }
}