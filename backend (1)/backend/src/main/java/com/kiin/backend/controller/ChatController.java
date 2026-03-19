package com.kiin.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ChatController {

    @Value("${openai.api.key}")
    private String apiKey;

    @PostMapping("/chat")
    public Map<String, String> chat(@RequestBody Map<String, String> body) {

        String message = body.get("message");

        WebClient client = WebClient.create("https://api.openai.com/v1/chat/completions");

        Map response = client.post()
                .header("Authorization", "Bearer " + apiKey)
                .header("Content-Type", "application/json")
                .bodyValue(Map.of(
                        "model", "gpt-4o-mini",
                        "messages", new Object[]{
                                Map.of("role", "system", "content", "You are an assistant for KIIN technology company. You answer questions about Starlink, CCTV installation, networking, and software development."),
                                Map.of("role", "user", "content", message)
                        }
                ))
                .retrieve()
                .bodyToMono(Map.class)
                .block();

        var choices = (java.util.List<Map<String, Object>>) response.get("choices");
        var msg = (Map<String, Object>) choices.get(0).get("message");

        return Map.of("reply", msg.get("content").toString());
    }
}