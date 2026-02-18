package com.kiin.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.kiin.backend.Valid;
import com.kiin.backend.model.ContactMessage;
import com.kiin.backend.repository.ContactRepository;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping
    public ResponseEntity<?> submitContact(@Valid @RequestBody ContactMessage message) {
        contactRepository.save(message);
        return ResponseEntity.ok("Message received successfully!");
    }
}