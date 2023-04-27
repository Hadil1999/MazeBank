package com.mazebank.gui.back.embauche;

import com.mazebank.entities.Embauche;
import com.mazebank.gui.back.MainWindowController;
import com.mazebank.services.EmbaucheService;
import com.mazebank.utils.AlertUtils;
import com.mazebank.utils.Constants;
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

public class ShowAllController implements Initializable {

    public static Embauche currentEmbauche;

    @FXML
    public Text topText;
    @FXML
    public Button addButton;
    @FXML
    public VBox mainVBox;
    @FXML
    public TextField searchTF;

    List<Embauche> listEmbauche;

    @Override
    public void initialize(URL url, ResourceBundle rb) {
        listEmbauche = EmbaucheService.getInstance().getAll();

        displayData("");
    }

    void displayData(String searchText) {
        mainVBox.getChildren().clear();

        Collections.reverse(listEmbauche);

        if (!listEmbauche.isEmpty()) {
            for (Embauche embauche : listEmbauche) {
                if (embauche.getPoste().toLowerCase().startsWith(searchText.toLowerCase())) {
                    mainVBox.getChildren().add(makeEmbaucheModel(embauche));
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

    public Parent makeEmbaucheModel(
            Embauche embauche
    ) {
        Parent parent = null;
        try {
            parent = FXMLLoader.load(Objects.requireNonNull(getClass().getResource(Constants.FXML_BACK_MODEL_EMBAUCHE)));

            HBox innerContainer = ((HBox) ((AnchorPane) ((AnchorPane) parent).getChildren().get(0)).getChildren().get(0));
            ((Text) innerContainer.lookup("#posteText")).setText("Poste : " + embauche.getPoste());
            ((Text) innerContainer.lookup("#dateEmbaucheText")).setText("DateEmbauche : " + embauche.getDateEmbauche());
            ((Text) innerContainer.lookup("#salaireText")).setText("Salaire : " + embauche.getSalaire());
            ((Text) innerContainer.lookup("#dureeText")).setText("Duree : " + embauche.getDuree());


            ((Button) innerContainer.lookup("#editButton")).setOnAction((event) -> modifierEmbauche(embauche));
            ((Button) innerContainer.lookup("#deleteButton")).setOnAction((event) -> supprimerEmbauche(embauche));


        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        }
        return parent;
    }

    @FXML
    private void ajouterEmbauche(ActionEvent ignored) {
        currentEmbauche = null;
        MainWindowController.getInstance().loadInterface(Constants.FXML_BACK_MANAGE_EMBAUCHE);
    }

    private void modifierEmbauche(Embauche embauche) {
        currentEmbauche = embauche;
        MainWindowController.getInstance().loadInterface(Constants.FXML_BACK_MANAGE_EMBAUCHE);
    }

    private void supprimerEmbauche(Embauche embauche) {
        currentEmbauche = null;

        Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
        alert.setTitle("Confirmer la suppression");
        alert.setHeaderText(null);
        alert.setContentText("Etes vous sûr de vouloir supprimer embauche ?");
        Optional<ButtonType> action = alert.showAndWait();

        if (action.isPresent()) {
            if (action.get() == ButtonType.OK) {
                if (EmbaucheService.getInstance().delete(embauche.getId())) {
                    MainWindowController.getInstance().loadInterface(Constants.FXML_BACK_DISPLAY_ALL_EMBAUCHE);
                } else {
                    AlertUtils.makeError("Could not delete embauche");
                }
            }
        }
    }


    @FXML
    private void search(KeyEvent ignored) {
        displayData(searchTF.getText());
    }

}
