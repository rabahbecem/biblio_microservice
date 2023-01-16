package com.example.demo.Model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;
import com.example.demo.Model.CommandeDetail;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@Entity
@Data @AllArgsConstructor 
public class Commande  {
	
	@Id
	private String id;
	
	private Date Date_commande;
 
	private String id_client;
	private String etat;
	private Double montant;
	
	private String Livre;
	private int Qte;

	
	
	
}


	
	
	
	


