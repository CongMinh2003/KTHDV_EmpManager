package org.example.springmvc.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UpdateSPController {
    @GetMapping("/UpdateSP")
    public String Home() {
        return "UpdateSP";
    }
}
