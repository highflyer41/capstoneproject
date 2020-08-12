package com.tts.pac;

import com.tts.pac.entities.Activity;
import com.tts.pac.repositories.ActivityRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PacApp implements CommandLineRunner{

	@Autowired
	private ActivityRepo activityRepo;

	public static void main(String[] args) {
		SpringApplication.run(PacApp.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		this.activityRepo.save(new Activity("wake up"));
		this.activityRepo.save(new Activity("eat"));
		this.activityRepo.save(new Activity("sleep"));
	}

}
