package gui.admin;


import entities.Investissement;
import gui.admin.MainWindowControllerAdmin;
import services.InvestissementService;
import utils.AlertUtils;
import utils.Constants;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.scene.text.Text;

import java.net.URL;
import java.util.ResourceBundle;

public class ManageControllerI implements Initializable {

    @FXML
    public TextField minBudgetTF;
    @FXML
    public Button btnAjout;
    @FXML
    public Text topText;

    Investissement currentInvestissement;


    @Override
    public void initialize(URL url, ResourceBundle rb) {

        currentInvestissement = ShowAllControllerI.currentInvestissement;

        if (currentInvestissement != null) {
            topText.setText("Modifier investissement");
            btnAjout.setText("Modifier");

            try {
                minBudgetTF.setText(String.valueOf(currentInvestissement.getMinBudget()));

            } catch (NullPointerException ignored) {
                System.out.println("NullPointerException");
            }
        } else {
            topText.setText("Ajouter investissement");
            btnAjout.setText("Ajouter");
        }
    }

    @FXML
    private void manage(ActionEvent ignored) {

        if (controleDeSaisie()) {

            Investissement investissement = new Investissement(
                    Integer.parseInt(minBudgetTF.getText())
            );

            if (currentInvestissement == null) {
                if (InvestissementService.getInstance().add(investissement)) {
                    AlertUtils.makeSuccessNotification("Investissement ajouté avec succés");
                    MainWindowControllerAdmin.getInstance().loadInterface(Constants.FXML_BACK_DISPLAY_ALL_INVESTISSEMENT);
                } else {
                    AlertUtils.makeError("Error");
                }
            } else {
                investissement.setId(currentInvestissement.getId());
                if (InvestissementService.getInstance().edit(investissement)) {
                    AlertUtils.makeSuccessNotification("Investissement modifié avec succés");
                    ShowAllControllerI.currentInvestissement = null;
                    MainWindowControllerAdmin.getInstance().loadInterface(Constants.FXML_BACK_DISPLAY_ALL_INVESTISSEMENT);
                } else {
                    AlertUtils.makeError("Error");
                }
            }

        }
    }


    private boolean controleDeSaisie() {


        if (minBudgetTF.getText().isEmpty()) {
            AlertUtils.makeInformation("minBudget ne doit pas etre vide");
            return false;
        }


        try {
            Integer.parseInt(minBudgetTF.getText());
        } catch (NumberFormatException ignored) {
            AlertUtils.makeInformation("minBudget doit etre un nombre");
            return false;
        }

        return true;
    }
}