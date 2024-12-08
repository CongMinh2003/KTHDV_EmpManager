package org.example.springmvc.Controller;

import org.example.springmvc.Model.SanPham;
import org.example.springmvc.Services.SanPhamService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SanPhamController {
    private final SanPhamService sanPhamService;

    public SanPhamController() {
        this.sanPhamService = new SanPhamService();
    }

    @GetMapping("/api/sanpham")
    @ResponseBody
    public List<SanPham> getSanPham() {
        return sanPhamService.getAllSanPham();
    }


    @PostMapping("/api/sanpham")
    @ResponseBody
    public ResponseEntity<Void> addSanPham(@RequestBody SanPham sanPham) {
        sanPhamService.addSanPham(sanPham);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/api/sanpham/{name}")
    @ResponseBody
    public ResponseEntity<Void> deleteSanPham(@PathVariable("name") String name) {
        boolean isDeleted = sanPhamService.deleteSanPhamByName(name);
        if (isDeleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/api/sanpham/{tenSP}")
    @ResponseBody
    public ResponseEntity<String> updateSanPham(@PathVariable String tenSP, @RequestBody SanPham updatedProduct) {
        boolean success = sanPhamService.updateSanPham(tenSP, updatedProduct);
        if (success) {
            return ResponseEntity.ok("Cập nhật sản phẩm thành công!");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Sản phẩm không tồn tại!");
        }
    }

}
