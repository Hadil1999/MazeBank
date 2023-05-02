package gui.admin;

import entities.Investissement;
import gui.admin.MainWindowControllerAdmin;
import services.InvestissementService;
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
import javafx.scene.control.TextField;
import javafx.scene.input.KeyEvent;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.VBox;
import javafx.scene.text.Text;

import java.io.IOException;
import java.net.URL;
import java.util.*;

public class ShowAllControllerI implements Initializable {

    public static Investissement currentInvestissement;

    @FXML
    public Text topText;
    @FXML
    public Button addButton;
    @FXML
    public VBox mainVBox;
    @FXML
    public TextField searchTF;

    List<Investissement> listInvestissement;

    @Override
    public void initialize(URL url, ResourceBundle rb) {
        listInvestissement = InvestissementService.getInstance().getAll();

        displayData("");
    }

    void displayData(String searchText) {
        mainVBox.getChildren().clear();

        Collections.reverse(listInvestissement);

        if (!listInvestissement.isEmpty()) {
            for (Investissement investissement : listInvestissement) {
                if (String.valueOf(investissement.getMinBudget()).toLowerCase().startsWith(searchText.toLowerCase())) {
                    mainVBox.getChildren().add(makeInvestissementModel(investissement));
                }

            }
        } else {
            StackPane stackPane = new StackPane();
            stackPane.setAlignment(Pos.CENTER);
            stackPane.setPrefHeight(200);
            stackPane.getChildren().add(new Text("Aucune donnée"));
            mainVBox.getChildren().add(stackPane);
        }
    }

    public Parent makeInvestissementModel(
            Investissement investissement
    ) {
        Parent parent = null;
        try {
            parent = FXMLLoader.load(Objects.requireNonNull(getClass().getResource(Constants.FXML_BACK_MODEL_INVESTISSEMENT)));

            HBox innerContainer = ((HBox) ((AnchorPane) ((AnchorPane) parent).getChildren().get(0)).getChildren().get(0));
            ((Text) innerContainer.lookup("#minBudgetText")).setText("MinBudget : " + investissement.getMinBudget());


            ((Button) innerContainer.lookup("#editButton")).setOnAction((event) -> modifierInvestissement(investissement));
            ((Button) innerContainer.lookup("#deleteButton")).setOnAction((event) -> supprimerInvestissement(investissement));


        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        }
        return parent;
    }

    @FXML
    private void ajouterInvestissement(ActionEvent ignored) {
        currentInvestissement = null;
        MainWindowControllerAdmin.getInstance().loadInterface(Constants.FXML_BACK_MANAGE_INVESTISSEMENT);
    }

    private void modifierInvestissement(Investissement investissement) {
        currentInvestissement = investissement;
        MainWindowControllerAdmin.getInstance().loadInterface(Constants.FXML_BACK_MANAGE_INVESTISSEMENT);
    }

    private void supprimerInvestissement(Investissement investissement) {
        currentInvestissement = null;

        Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
        alert.setTitle("Confirmer la suppression");
        alert.setHeaderText(null);
        alert.setContentText("Etes vous sûr de vouloir supprimer investissement ?");
        Optional<ButtonType> action = alert.showAndWait();

        if (action.isPresent()) {
            if (action.get() == ButtonType.OK) {
                if (InvestissementService.getInstance().delete(investissement.getId())) {
                    MainWindowControllerAdmin.getInstance().loadInterface(Constants.FXML_BACK_DISPLAY_ALL_INVESTISSEMENT);
                } else {
                    AlertUtils.makeError("Could not delete investissement");
                }
            }
        }
    }


    @FXML
    private void search(KeyEvent ignored) {
        displayData(searchTF.getText());
    }

}
