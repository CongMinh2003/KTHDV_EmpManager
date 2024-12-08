package org.example.springmvc.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeeController {
    @GetMapping("/Homee")
    public String Homee() {
        return "Homee";
    }
}
