package org.example.springmvc.Controller;//package org.example.springmvc.Controller;

import org.example.springmvc.Services.AccountUserService;
import org.example.springmvc.Model.AccountUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/RegisterAccount")
public class RegisterAccountController {

    private final AccountUserService accountUserService;

    @Autowired
    public RegisterAccountController(AccountUserService accountUserService) {
        this.accountUserService = accountUserService;
    }

    @GetMapping
    public String showRegisterAccountForm() {
        return "RegisterAccount";
    }

    @PostMapping("/api")
    @ResponseBody
    public ResponseEntity<String> registerAccount(@RequestBody AccountUser user) {
        boolean registrationSuccessful = accountUserService.registerUser(user);
        if (registrationSuccessful) {
            return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("User registration failed.", HttpStatus.BAD_REQUEST);
        }
    }
}
