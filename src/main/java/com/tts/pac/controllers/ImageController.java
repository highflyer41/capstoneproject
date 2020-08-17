package com.tts.pac.controllers;

import java.util.Collection;

import com.tts.pac.entities.ActivityImage;
import com.tts.pac.repositories.ImageRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:3000", "http://www.apirequest.io"})
public class ImageController {
    
    @Autowired
    ImageRepo imageRepo;

    @GetMapping("/images")
    public Collection<ActivityImage> getImages() {
        return imageRepo.findAll();
    }

    @GetMapping("/images/{name}")
    public ActivityImage getImage(@PathVariable String name) {
        return imageRepo.findByName(name);
    }
}