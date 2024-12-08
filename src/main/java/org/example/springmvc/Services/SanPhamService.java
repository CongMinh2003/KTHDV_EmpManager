package org.example.springmvc.Services;

import org.example.springmvc.Model.SanPham;

import java.util.List;

public class SanPhamService {

    private final DatabaseService databaseService;

    public SanPhamService() {
        this.databaseService = new DatabaseService();
    }

    public List<SanPham> getAllSanPham() {
        return databaseService.getAllSanPham();
    }

    public void addSanPham(SanPham sanPham) {
        databaseService.addSanPham(sanPham);
    }

    public boolean deleteSanPhamByName(String name) {
        return databaseService.deleteSanPhamByName(name);
    }

    public boolean updateSanPham(String tenSP, SanPham updatedProduct) {
        return databaseService.updateSanPham(tenSP, updatedProduct);
    }
}
