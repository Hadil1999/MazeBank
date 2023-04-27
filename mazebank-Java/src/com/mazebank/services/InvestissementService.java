package com.mazebank.services;

import com.mazebank.entities.Investissement;
import com.mazebank.utils.DatabaseConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class InvestissementService {

    private static InvestissementService instance;
    PreparedStatement preparedStatement;
    Connection connection;

    public InvestissementService() {
        connection = DatabaseConnection.getInstance().getConnection();
    }

    public static InvestissementService getInstance() {
        if (instance == null) {
            instance = new InvestissementService();
        }
        return instance;
    }

    public List<Investissement> getAll() {
        List<Investissement> listInvestissement = new ArrayList<>();
        try {
            preparedStatement = connection.prepareStatement("SELECT * FROM `investissement`");

            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                listInvestissement.add(new Investissement(
                        resultSet.getInt("id"),
                        resultSet.getInt("min_budget")

                ));
            }
        } catch (SQLException exception) {
            System.out.println("Error (getAll) investissement : " + exception.getMessage());
        }
        return listInvestissement;
    }


    public boolean add(Investissement investissement) {


        String request = "INSERT INTO `investissement`(`min_budget`) VALUES(?)";
        try {
            preparedStatement = connection.prepareStatement(request);

            preparedStatement.setInt(1, investissement.getMinBudget());

            preparedStatement.executeUpdate();
            System.out.println("Investissement added");
            return true;
        } catch (SQLException exception) {
            System.out.println("Error (add) investissement : " + exception.getMessage());
        }
        return false;
    }

    public boolean edit(Investissement investissement) {

        String request = "UPDATE `investissement` SET `min_budget` = ? WHERE `id`=" + investissement.getId();
        try {
            preparedStatement = connection.prepareStatement(request);

            preparedStatement.setInt(1, investissement.getMinBudget());

            preparedStatement.executeUpdate();
            System.out.println("Investissement edited");
            return true;
        } catch (SQLException exception) {
            System.out.println("Error (edit) investissement : " + exception.getMessage());
        }
        return false;
    }

    public boolean delete(int id) {
        try {
            preparedStatement = connection.prepareStatement("DELETE FROM `investissement` WHERE `id`=?");
            preparedStatement.setInt(1, id);

            preparedStatement.executeUpdate();
            preparedStatement.close();
            System.out.println("Investissement deleted");
            return true;
        } catch (SQLException exception) {
            System.out.println("Error (delete) investissement : " + exception.getMessage());
        }
        return false;
    }
}
