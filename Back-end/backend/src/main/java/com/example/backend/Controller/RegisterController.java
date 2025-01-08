package com.example.backend.Controller;

import com.example.backend.Model.Authentication;
import com.example.backend.Service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(
    origins = { "http://localhost:4200", "http://192.168.0.107:4200" }, 
    allowedHeaders = "*", 
    allowCredentials = "true", 
    methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE }
)
public class RegisterController {
    
    @Autowired
    private RegisterService registerService;

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> registerUser(@RequestBody Authentication authentication) {
        try {
            Authentication newUser = registerService.registerUser(authentication);
            Map<String, String> response = new HashMap<>();
            if (newUser != null) {
                response.put("userName", newUser.getUserName());
                response.put("message", "Đăng ký thành công!");
                response.put("token", newUser.getToken());
                return ResponseEntity.ok(response);
            }
            response.put("message", "Đăng ký thất bại!");
            return ResponseEntity.status(400).body(response);
        } catch (Exception e) {
            e.printStackTrace();
            Map<String, String> response = new HashMap<>();
            response.put("message", "Lỗi hệ thống!");
            response.put("status", "error");
            return ResponseEntity.status(500).body(response);
        }
    }
}
