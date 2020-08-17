package com.tts.pac.repositories;

import com.tts.pac.entities.ActivityImage;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepo extends JpaRepository<ActivityImage, Long>{
    
    public ActivityImage findByName(String name);
}