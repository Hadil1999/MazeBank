package com.mazebank.gui.front;

import com.mazebank.MainApp;
import com.mazebank.utils.Animations;
import com.mazebank.utils.Constants;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.geometry.Insets;
import javafx.scene.control.Button;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.layout.CornerRadii;
import javafx.scene.paint.Color;

import java.net.URL;
import java.util.ResourceBundle;

public class TopBarController implements Initializable {

    private final Color COLOR_GRAY = new Color(0.9, 0.9, 0.9, 1);
    private final Color COLOR_PRIMARY = Color.web("#000000");
    private final Color COLOR_DARK = new Color(1, 1, 1, 0.65);
    private Button[] liens;

    @FXML
    private Button btnAssurances;

    @FXML
    private Button btnInvestissements;

    @FXML
    private Button btnEmbauches;

    @FXML
    private AnchorPane mainComponent;

    @Override
    public void initialize(URL url, ResourceBundle rb) {

        liens = new Button[]{
                btnAssurances,
                btnInvestissements,
                btnEmbauches,
        };

        mainComponent.setBackground(new Background(new BackgroundFill(COLOR_PRIMARY, CornerRadii.EMPTY, Insets.EMPTY)));

        for (Button lien : liens) {
            lien.setTextFill(COLOR_DARK);
            lien.setBackground(new Background(new BackgroundFill(COLOR_PRIMARY, CornerRadii.EMPTY, Insets.EMPTY)));
            Animations.animateButton(lien, COLOR_GRAY, Color.WHITE, COLOR_PRIMARY, 0, false);
        }

        btnAssurances.setTextFill(COLOR_DARK);

        btnInvestissements.setTextFill(COLOR_DARK);

        btnEmbauches.setTextFill(COLOR_DARK);

    }

    @FXML
    private void afficherAssurances(ActionEvent ignored) {
        goToLink(Constants.FXML_FRONT_DISPLAY_ALL_ASSURANCE);

        btnAssurances.setTextFill(COLOR_PRIMARY);
        Animations.animateButton(btnAssurances, COLOR_GRAY, Color.WHITE, COLOR_PRIMARY, 0, false);
    }

    @FXML
    private void afficherInvestissements(ActionEvent ignored) {
        goToLink(Constants.FXML_FRONT_DISPLAY_ALL_INVESTISSEMENT);

        btnInvestissements.setTextFill(COLOR_PRIMARY);
        Animations.animateButton(btnInvestissements, COLOR_GRAY, Color.WHITE, COLOR_PRIMARY, 0, false);
    }

    @FXML
    private void afficherEmbauches(ActionEvent ignored) {
        goToLink(Constants.FXML_FRONT_DISPLAY_ALL_EMBAUCHE);

        btnEmbauches.setTextFill(COLOR_PRIMARY);
        Animations.animateButton(btnEmbauches, COLOR_GRAY, Color.WHITE, COLOR_PRIMARY, 0, false);
    }

    private void goToLink(String link) {
        for (Button lien : liens) {
            lien.setTextFill(COLOR_DARK);
            Animations.animateButton(lien, COLOR_GRAY, COLOR_DARK, COLOR_PRIMARY, 0, false);
        }
        MainWindowController.getInstance().loadInterface(link);
    }

    @FXML
    public void logout(ActionEvent ignored) {
        MainApp.getInstance().logout();
    }
}
