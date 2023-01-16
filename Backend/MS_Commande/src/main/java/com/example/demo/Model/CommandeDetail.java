package com.example.demo.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data 

public class CommandeDetail {
	@Id
	@GeneratedValue
	private int id;
	private String Livre;
	private int Qte;

}
