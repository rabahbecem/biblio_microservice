package com.example.demo.dto;

import java.util.Date;
import java.util.List;



import com.example.demo.Model.CommandeDetail;

import lombok.Data;
@Data
public class CommandeRespancedto {
	private String id;

	private Date Date_commande;

	private String id_client;
	private String etat;
	private Double montant;
	private String Livre;
	private int Qte;


}
