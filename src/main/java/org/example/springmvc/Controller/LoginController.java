package org.example.springmvc.Controller;

import org.example.springmvc.Model.AccountUser;
import org.example.springmvc.Services.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/Login")
public class LoginController {

    private final UserLoginService userService;

    @Autowired
    public LoginController(UserLoginService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String showLoginForm() {
        return "Login";
    }


    @PostMapping("/api")
    @ResponseBody
    public ResponseEntity<String> login(@RequestBody AccountUser user) {
        if (userService.authenticate(user)) {
            return new ResponseEntity<>("Login successful", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
        }
    }
}
