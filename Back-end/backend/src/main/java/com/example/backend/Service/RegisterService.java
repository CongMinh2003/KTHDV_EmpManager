    package com.example.backend.Service;

    import com.example.backend.Model.Authentication;
    import com.example.backend.Repository.RegisterRepository;
    import com.example.backend.JWT.JwtUtil;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
    import org.springframework.stereotype.Service;

    @Service
    public class RegisterService {

        @Autowired
        private RegisterRepository registerRepository;

        @Autowired
        private JwtUtil jwtUtil;

        private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        public Authentication registerUser(Authentication authentication) {

            Authentication existingUser = registerRepository.findByUserName(authentication.getUserName());
            if (existingUser != null) {
                return null;
            }
        
            // Mã hóa mật khẩu
            String encodedPassword = passwordEncoder.encode(authentication.getPassword());
            authentication.setPassword(encodedPassword);    
        
            Authentication savedUser = registerRepository.save(authentication);
        
            String token = jwtUtil.generateToken(authentication.getUserName());
            savedUser.setToken(token);
        
            return savedUser;
        }
        
    }
