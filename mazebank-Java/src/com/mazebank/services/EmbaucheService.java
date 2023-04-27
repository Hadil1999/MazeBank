package com.mazebank.services;

import com.mazebank.entities.Embauche;
import com.mazebank.utils.DatabaseConnection;

import java.sql.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class EmbaucheService {

    private static EmbaucheService instance;
    PreparedStatement preparedStatement;
    Connection connection;

    public EmbaucheService() {
        connection = DatabaseConnection.getInstance().getConnection();
    }

    public static EmbaucheService getInstance() {
        if (instance == null) {
            instance = new EmbaucheService();
        }
        return instance;
    }

    public List<Embauche> getAll() {
        List<Embauche> listEmbauche = new ArrayList<>();
        try {
            preparedStatement = connection.prepareStatement("SELECT * FROM `embauche`");

            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                listEmbauche.add(new Embauche(
                        resultSet.getInt("id"),
                        resultSet.getString("poste"),
                        LocalDate.parse(String.valueOf(resultSet.getDate("date_embauche"))),
                        resultSet.getFloat("salaire"),
                        resultSet.getInt("duree")

                ));
            }
        } catch (SQLException exception) {
            System.out.println("Error (getAll) embauche : " + exception.getMessage());
        }
        return listEmbauche;
    }


    public boolean add(Embauche embauche) {


        String request = "INSERT INTO `embauche`(`poste`, `date_embauche`, `salaire`, `duree`) VALUES(?, ?, ?, ?)";
        try {
            preparedStatement = connection.prepareStatement(request);

            preparedStatement.setString(1, embauche.getPoste());
            preparedStatement.setDate(2, Date.valueOf(embauche.getDateEmbauche()));
            preparedStatement.setFloat(3, embauche.getSalaire());
            preparedStatement.setInt(4, embauche.getDuree());

            preparedStatement.executeUpdate();
            System.out.println("Embauche added");
            return true;
        } catch (SQLException exception) {
            System.out.println("Error (add) embauche : " + exception.getMessage());
        }
        return false;
    }

    public boolean edit(Embauche embauche) {

        String request = "UPDATE `embauche` SET `poste` = ?, `date_embauche` = ?, `salaire` = ?, `duree` = ? WHERE `id`=" + embauche.getId();
        try {
            preparedStatement = connection.prepareStatement(request);

            preparedStatement.setString(1, embauche.getPoste());
            preparedStatement.setDate(2, Date.valueOf(embauche.getDateEmbauche()));
            preparedStatement.setFloat(3, embauche.getSalaire());
            preparedStatement.setInt(4, embauche.getDuree());

            preparedStatement.executeUpdate();
            System.out.println("Embauche edited");
            return true;
        } catch (SQLException exception) {
            System.out.println("Error (edit) embauche : " + exception.getMessage());
        }
        return false;
    }

    public boolean delete(int id) {
        try {
            preparedStatement = connection.prepareStatement("DELETE FROM `embauche` WHERE `id`=?");
            preparedStatement.setInt(1, id);

            preparedStatement.executeUpdate();
            preparedStatement.close();
            System.out.println("Embauche deleted");
            return true;
        } catch (SQLException exception) {
            System.out.println("Error (delete) embauche : " + exception.getMessage());
        }
        return false;
    }
}
