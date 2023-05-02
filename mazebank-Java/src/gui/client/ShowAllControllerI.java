package gui.client;

import entities.Investissement;
import services.InvestissementService;
import utils.Constants;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.geometry.Pos;
import javafx.scene.Parent;
import javafx.scene.control.TextField;
import javafx.scene.input.KeyEvent;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.VBox;
import javafx.scene.text.Text;

import java.io.IOException;
import java.net.URL;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.ResourceBundle;

public class ShowAllControllerI implements Initializable {

    public static Investissement currentInvestissement;

    @FXML
    public Text topText;
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
                if (String.valueOf(investissement.getMinBudget()).startsWith(searchText.toLowerCase())) {
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
            parent = FXMLLoader.load(Objects.requireNonNull(getClass().getResource(Constants.FXML_FRONT_MODEL_INVESTISSEMENT)));

            HBox innerContainer = ((HBox) ((AnchorPane) ((AnchorPane) parent).getChildren().get(0)).getChildren().get(0));
            ((Text) innerContainer.lookup("#minBudgetText")).setText("MinBudget : " + investissement.getMinBudget());

        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        }
        return parent;
    }

    @FXML
    private void search(KeyEvent ignored) {
        displayData(searchTF.getText());
    }

}
