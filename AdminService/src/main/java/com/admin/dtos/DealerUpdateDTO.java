package com.admin.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DealerUpdateDTO {
	
	@NotBlank
	private String name;
	@NotBlank
	private String gender;
	@Positive
	private int age;


}
