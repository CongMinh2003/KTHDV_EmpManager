package com.example.QuanLyNhanVien.Service;

import java.util.List;
import java.util.Optional;

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


    // Trả về danh sách nhân viên có tên trùng khớp
    public List<NhanVien> findByHoTen(String hoTen) {
        return nhanVienRepository.findByHoTen(hoTen);  
    }

    public NhanVien updateNhanvien(int idnhanvien,NhanVien nhanVienDetail) {
       Optional<NhanVien> nhanvienOpt = nhanVienRepository.findById(idnhanvien);
       if(nhanvienOpt.isPresent()){
        NhanVien nhanvien =nhanvienOpt.get();
        nhanvien.setHoTen(nhanVienDetail.getHoTen());
        nhanvien.setNgaySinh(nhanVienDetail.getNgaySinh());
        nhanvien.setDiaChi(nhanVienDetail.getDiaChi());
        nhanvien.setEmail(nhanVienDetail.getEmail());
        nhanvien.setNgayVaoLam(nhanVienDetail.getNgayVaoLam());
        nhanvien.setSoDienThoai(nhanVienDetail.getSoDienThoai());
        nhanvien.setChucVu(nhanVienDetail.getChucVu());
         return nhanVienRepository.save(nhanvien);
       }
       else{
         throw new RuntimeException("lỗi cập nhập");
       }
      
    }

    public NhanVien deleteNhanVien(int id){
        Optional <NhanVien> nhanvienOpt = nhanVienRepository.findById(id);
        if(nhanvienOpt.isPresent()){
           NhanVien nhanVien =  nhanvienOpt.get();
             nhanVienRepository.delete(nhanVien);
             return nhanVien;
        }
              throw new RuntimeException("lỗi xóa nhân vien");
        
    }
    
}
