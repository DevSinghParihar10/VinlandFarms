package com.farmer.clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.farmer.dtos.EmailModel;


@FeignClient(url = "http://localhost:5004/email",name = "emailClient")
public interface EmailClient {
	
	@PostMapping("/sendMail")
	public String sendMail(@RequestBody EmailModel mail );

}
