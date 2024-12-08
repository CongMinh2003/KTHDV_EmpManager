package org.example.springmvc.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class XoaSP {
    @GetMapping("/XoaSP")
    public String Home() {
        return "XoaSP";
    }
}
