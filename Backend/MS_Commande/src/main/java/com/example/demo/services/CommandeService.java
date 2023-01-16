package com.example.demo.services;

import java.util.List;


import com.example.demo.dto.CommandeRequestdto;
import com.example.demo.dto.CommandeRespancedto;

public interface CommandeService {
	CommandeRespancedto getCommande(String id);
	 List<CommandeRespancedto> listCommandes();
	 CommandeRespancedto newCommande(CommandeRequestdto commandeRequestDTO);
	void deleteCommande(String id);

}
