package com.example.tinhluong.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.tinhluong.Model.Tinhluong;
import com.example.tinhluong.Service.TinhluongService;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/tinhluong")
@RestController
@CrossOrigin(origins = { "http://localhost:4200",
        "http://192.168.0.107:4200" }, allowedHeaders = "*", allowCredentials = "true")
public class TinhluongController {
    @Autowired
    private TinhluongService service;

    @GetMapping("/employees")
    public List<Tinhluong> getAllEmployees() {
        return service.getAllEmployees();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tinhluong> getEmployeeById(@PathVariable int id) {
        Optional<Tinhluong> employee = service.getEmployeeById(id);
        return employee.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/hello")
    public Tinhluong saveEmployee(@RequestBody Tinhluong employee) {
        return service.saveEmployee(employee);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable int id) {
        service.deleteEmployee(id);
        return ResponseEntity.noContent().build();
    }
}
