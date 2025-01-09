package com.example.QuanLyNhanVien.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
    @PostMapping("updatenhanvien/{id}")
    public ResponseEntity<NhanVien> updateNhanVien(@PathVariable int id, @RequestBody NhanVien nhanVien) {
         nhanVienService.updateNhanvien(id, nhanVien);
        return ResponseEntity.ok(nhanVien);
    }

    @DeleteMapping("deletenhanvien/{id}")
    public ResponseEntity<Map<String,String>> updateNhanVien(@PathVariable int id) {
         nhanVienService.deleteNhanVien(id);
         Map<String,String> respones = new HashMap<>();
         respones.put("meagges", "xóa thành công");
        return ResponseEntity.ok(respones);
    }




}
