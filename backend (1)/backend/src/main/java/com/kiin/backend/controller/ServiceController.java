package com.kiin.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServiceController {
    @GetMapping("/service/status")
    public String getStatus() {
        return "Service is running";
    }
}
