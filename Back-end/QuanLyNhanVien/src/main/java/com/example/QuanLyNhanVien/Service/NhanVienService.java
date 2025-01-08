package com.example.QuanLyNhanVien.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.QuanLyNhanVien.Entity.NhanVien;
import com.example.QuanLyNhanVien.Repository.NhanVienRepository;

@Service
public class NhanVienService {
     @Autowired
    private NhanVienRepository nhanVienRepository;

    public List<NhanVien> getAllNhanVien() {
        return nhanVienRepository.findAll();
    }

    public List<NhanVien> searchByName(String name) {
        return nhanVienRepository.findByHoTenContainingIgnoreCase(name);
    }
    

    public NhanVien addNhanVien(NhanVien nhanVien) {
        return nhanVienRepository.save(nhanVien);
    }

    public boolean deleteNhanVienByName(String hoTen) {
        List<NhanVien> nhanViens = nhanVienRepository.findByHoTen(hoTen);
        if (!nhanViens.isEmpty()) {
            nhanVienRepository.deleteAll(nhanViens);
            return true;
        }
        return false;
    }

    // Trả về danh sách nhân viên có tên trùng khớp
    public List<NhanVien> findByHoTen(String hoTen) {
        return nhanVienRepository.findByHoTen(hoTen);  
    }

    public NhanVien save(NhanVien nhanVien) {
        return nhanVienRepository.save(nhanVien);
    }
    
}
