package com.tts.pac.repositories;

import com.tts.pac.entities.Activity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepo extends JpaRepository<Activity, Long> {
    
}