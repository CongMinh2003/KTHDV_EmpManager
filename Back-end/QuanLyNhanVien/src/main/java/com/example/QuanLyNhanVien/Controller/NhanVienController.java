package com.example.QuanLyNhanVien.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.QuanLyNhanVien.Entity.NhanVien;
import com.example.QuanLyNhanVien.Service.NhanVienService;

@RestController
@RequestMapping("/api/nhanvien")
public class NhanVienController {
    @Autowired
    private NhanVienService nhanVienService;

    @GetMapping
    public List<NhanVien> getAllNhanVien() {
        return nhanVienService.getAllNhanVien();
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<List<NhanVien>> searchNhanVienByName(@PathVariable String name) {
        List<NhanVien> nhanViens = nhanVienService.searchByName(name);
        if (!nhanViens.isEmpty()) {
            return ResponseEntity.ok(nhanViens);
        }
        return ResponseEntity.noContent().build();
    }


     @PostMapping
    public NhanVien addNhanVien(@RequestBody NhanVien nhanVien) {
        return nhanVienService.addNhanVien(nhanVien);
    }

    @DeleteMapping("/delete-by-name/{hoTen}")
    public ResponseEntity<Void> deleteNhanVienByName(@PathVariable String hoTen) {
        boolean deleted = nhanVienService.deleteNhanVienByName(hoTen);
        if (deleted) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

     // Lấy thông tin nhân viên theo tên
     @GetMapping("/find-by-name/{hoTen}")
     public ResponseEntity<List<NhanVien>> getNhanVienByName(@PathVariable String hoTen) {
         List<NhanVien> nhanViens = nhanVienService.findByHoTen(hoTen);
         if (!nhanViens.isEmpty()) {
             return ResponseEntity.ok(nhanViens);
         } else {
             return ResponseEntity.notFound().build();
         }
     }
     

    // Cập nhật thông tin nhân viên
    @PutMapping("/{id}")
    public ResponseEntity<NhanVien> updateNhanVien(@PathVariable int id, @RequestBody NhanVien nhanVien) {
        nhanVien.setId(id);  
        NhanVien updatedNhanVien = nhanVienService.save(nhanVien);
        return ResponseEntity.ok(updatedNhanVien);
    }
    

}
