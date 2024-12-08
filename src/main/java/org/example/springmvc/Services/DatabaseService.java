package org.example.springmvc.Services;
import com.microsoft.sqlserver.jdbc.SQLServerDataSource;
import org.example.springmvc.Model.SanPham;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class DatabaseService {
    protected SQLServerDataSource getDataSource() {
        SQLServerDataSource ds = new SQLServerDataSource();
        ds.setUser("sa");
        ds.setPassword("congminh2003@.");
        ds.setServerName("DESKTOP-U3TL1QN\\SQLEXPRESS02");
        ds.setPortNumber(1433);
        ds.setDatabaseName("Hipstershop");
        ds.setTrustServerCertificate(true);

        return ds;
    }

    public List<SanPham> getAllSanPham() {
        List<SanPham> sanPhamList = new ArrayList<>();
        String query = "SELECT * FROM SanPham";

        try (Connection connection = getDataSource().getConnection();
             PreparedStatement statement = connection.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {

            while (resultSet.next()) {
                SanPham sanPham = new SanPham();
                sanPham.setId(resultSet.getLong("id"));
                sanPham.setTenSP(resultSet.getString("tenSP"));
                sanPham.setGiaSP(resultSet.getInt("giaSP"));
                sanPham.setSoLuong(resultSet.getInt("soLuong"));
                sanPhamList.add(sanPham);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return sanPhamList;
    }

    public void addSanPham(SanPham sanPham) {
        String query = "INSERT INTO SanPham (tenSP, giaSP, soLuong) VALUES (?, ?, ?)";

        try (Connection connection = getDataSource().getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setString(1, sanPham.getTenSP());
            statement.setInt(2, sanPham.getGiaSP());
            statement.setInt(3, sanPham.getSoLuong());
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public boolean deleteSanPhamByName(String name) {
        String query = "DELETE FROM SanPham WHERE tenSP = ?";
        try (Connection connection = getDataSource().getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, name);
            int rowsAffected = statement.executeUpdate();
            return rowsAffected > 0;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }


    public boolean updateSanPham(String tenSP, SanPham updatedProduct) {
        String query = "UPDATE SanPham SET giaSP = ?, soLuong = ? WHERE tenSP = ?";
        try (Connection connection = getDataSource().getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setInt(1, updatedProduct.getGiaSP());
            statement.setInt(2, updatedProduct.getSoLuong());
            statement.setString(3, tenSP);

            int rowsUpdated = statement.executeUpdate();
            return rowsUpdated > 0;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }


}
