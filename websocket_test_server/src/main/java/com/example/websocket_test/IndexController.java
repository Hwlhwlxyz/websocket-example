package com.example.websocket_test;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/")
public class IndexController {
    @RequestMapping(value = "/thymeleaf")
    public String index(@RequestParam(name = "name", required = false, defaultValue = "world") String name,
                           Model model) {
        model.addAttribute("xname", name);
        return "index";
    }
}
