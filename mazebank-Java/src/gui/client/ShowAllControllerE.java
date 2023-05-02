package gui.client;

import entities.Embauche;
import services.EmbaucheService;
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

public class ShowAllControllerE implements Initializable {

    public static Embauche currentEmbauche;

    @FXML
    public Text topText;
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
            parent = FXMLLoader.load(Objects.requireNonNull(getClass().getResource(Constants.FXML_FRONT_MODEL_EMBAUCHE)));

            HBox innerContainer = ((HBox) ((AnchorPane) ((AnchorPane) parent).getChildren().get(0)).getChildren().get(0));
            ((Text) innerContainer.lookup("#posteText")).setText("Poste : " + embauche.getPoste());
            ((Text) innerContainer.lookup("#dateEmbaucheText")).setText("DateEmbauche : " + embauche.getDateEmbauche());
            ((Text) innerContainer.lookup("#salaireText")).setText("Salaire : " + embauche.getSalaire());
            ((Text) innerContainer.lookup("#dureeText")).setText("Duree : " + embauche.getDuree());

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
