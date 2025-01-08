package com.example.QuanLyNhanVien.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.QuanLyNhanVien.Entity.NhanVien;



@Repository
public interface NhanVienRepository extends JpaRepository<NhanVien, Integer> {
    // List<NhanVien> findByHoTenContaining(String term);
    List<NhanVien> findByHoTen(String hoTen);
    List<NhanVien> findByHoTenContainingIgnoreCase(String hoTen);

}
