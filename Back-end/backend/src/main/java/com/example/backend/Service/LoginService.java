package com.example.backend.Service;

import com.example.backend.Model.Authentication;
import com.example.backend.Repository.RegisterRepository;
import com.example.backend.JWT.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private RegisterRepository registerRepository;

    @Autowired
    private JwtUtil jwtUtil;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public String loginAuthentication(String userName, String password) {

        Authentication authentication = registerRepository.findByUserName(userName);
        if (authentication != null && passwordEncoder.matches(password, authentication.getPassword())) {
            return jwtUtil.generateToken(userName);
        }
        return null;
    }
}
