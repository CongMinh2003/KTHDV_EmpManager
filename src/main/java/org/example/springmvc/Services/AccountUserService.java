package org.example.springmvc.Services;//package org.example.springmvc.Services;

import org.example.springmvc.Model.AccountUser;
import org.example.springmvc.Services.DatabaseService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@Service
public class AccountUserService extends DatabaseService {

    public boolean registerUser(AccountUser user) {
        try (Connection conn = getDataSource().getConnection()) {
            String query = "INSERT INTO AccountUser (username, password, email, phone) VALUES (?, ?, ?, ?)";
            PreparedStatement statement = conn.prepareStatement(query);
            statement.setString(1, user.getUsername());
            statement.setString(2, user.getPassword());
            statement.setString(3, user.getEmail());
            statement.setString(4, user.getPhone());
            int rowsAffected = statement.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

//    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//
//    public boolean registerUser(AccountUser user) {
//        try (Connection conn = getDataSource().getConnection()) {
//            String query = "INSERT INTO AccountUser (username, password, email, phone) VALUES (?, ?, ?, ?)";
//            PreparedStatement statement = conn.prepareStatement(query);
//
//            String encodedPassword = passwordEncoder.encode(user.getPassword());
//            statement.setString(1, user.getUsername());
//            statement.setString(2, encodedPassword);
//            statement.setString(3, user.getEmail());
//            statement.setString(4, user.getPhone());
//
//            int rowsAffected = statement.executeUpdate();
//            return rowsAffected > 0;
//        } catch (SQLException e) {
//            e.printStackTrace();
//            return false;
//        }
//    }

}

