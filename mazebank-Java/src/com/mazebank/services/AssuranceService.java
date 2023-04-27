package com.mazebank.services;

import com.mazebank.entities.Assurance;
import com.mazebank.utils.DatabaseConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class AssuranceService {

    private static AssuranceService instance;
    PreparedStatement preparedStatement;
    Connection connection;

    public AssuranceService() {
        connection = DatabaseConnection.getInstance().getConnection();
    }

    public static AssuranceService getInstance() {
        if (instance == null) {
            instance = new AssuranceService();
        }
        return instance;
    }

    public List<Assurance> getAll() {
        List<Assurance> listAssurance = new ArrayList<>();
        try {
            preparedStatement = connection.prepareStatement("SELECT * FROM `assurance`");

            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                listAssurance.add(new Assurance(
                        resultSet.getInt("id"),
                        resultSet.getString("libelle"),
                        resultSet.getString("image"),
                        resultSet.getString("partenaire"),
                        resultSet.getString("type")

                ));
            }
        } catch (SQLException exception) {
            System.out.println("Error (getAll) assurance : " + exception.getMessage());
        }
        return listAssurance;
    }


    public boolean add(Assurance assurance) {


        String request = "INSERT INTO `assurance`(`libelle`, `image`, `partenaire`, `type`) VALUES(?, ?, ?, ?)";
        try {
            preparedStatement = connection.prepareStatement(request);

            preparedStatement.setString(1, assurance.getLibelle());
            preparedStatement.setString(2, assurance.getImage());
            preparedStatement.setString(3, assurance.getPartenaire());
            preparedStatement.setString(4, assurance.getType());

            preparedStatement.executeUpdate();
            System.out.println("Assurance added");
            return true;
        } catch (SQLException exception) {
            System.out.println("Error (add) assurance : " + exception.getMessage());
        }
        return false;
    }

    public boolean edit(Assurance assurance) {

        String request = "UPDATE `assurance` SET `libelle` = ?, `image` = ?, `partenaire` = ?, `type` = ? WHERE `id`=" + assurance.getId();
        try {
            preparedStatement = connection.prepareStatement(request);

            preparedStatement.setString(1, assurance.getLibelle());
            preparedStatement.setString(2, assurance.getImage());
            preparedStatement.setString(3, assurance.getPartenaire());
            preparedStatement.setString(4, assurance.getType());

            preparedStatement.executeUpdate();
            System.out.println("Assurance edited");
            return true;
        } catch (SQLException exception) {
            System.out.println("Error (edit) assurance : " + exception.getMessage());
        }
        return false;
    }

    public boolean delete(int id) {
        try {
            preparedStatement = connection.prepareStatement("DELETE FROM `assurance` WHERE `id`=?");
            preparedStatement.setInt(1, id);

            preparedStatement.executeUpdate();
            preparedStatement.close();
            System.out.println("Assurance deleted");
            return true;
        } catch (SQLException exception) {
            System.out.println("Error (delete) assurance : " + exception.getMessage());
        }
        return false;
    }
}
