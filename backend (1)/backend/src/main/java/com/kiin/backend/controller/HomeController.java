package com.kiin.backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/home")
public class HomeController {

    @GetMapping
    public ResponseEntity<Map<String, String>> getHome() {
        Map<String, String> data = new HashMap<>();
        data.put("intro", "Welcome to KIIN Innovation");
        data.put("vision", "Innovating for a smarter future");
        data.put("mission", "Delivering tech solutions");
        data.put("cta", "Get Started");
        return ResponseEntity.ok(data);
    }
}