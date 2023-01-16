package com.example.demo.services;

import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.Model.Customer;

import com.example.demo.Model.Commande;
import com.example.demo.Model.CommandeRepository;
import com.example.demo.dto.CommandeRequestdto;
import com.example.demo.dto.CommandeRespancedto;
import com.example.demo.mappers.CommandeMapper;
import com.example.demo.feign.CustomerServiceRestClient;
@Service

public class CommandeServiceImp implements CommandeService{
	 private final CommandeRepository commandeRepository;
	    private final CustomerServiceRestClient customerServiceRestClient;
	    private final CommandeMapper commandeMapper;

	    public CommandeServiceImp(CommandeRepository commandeRepository, CustomerServiceRestClient customerServiceRestClient, CommandeMapper commandeMapper) {
	        this.commandeRepository = commandeRepository;
	        this.customerServiceRestClient = customerServiceRestClient;
	        this.commandeMapper = commandeMapper;
	    }

	@Override
	public CommandeRespancedto getCommande(String id) {
		 Commande commande=commandeRepository.findById(id).orElse(null);
	        if(commande==null) throw new RuntimeException("commande Not found");
	        
	       
	        return commandeMapper.commandeToCommandeDTO(commande);	}

	@Override
	public List<CommandeRespancedto> listCommandes() {
		 List<Commande> commandes=commandeRepository.findAll();
	        
	        return commandes.stream().map((commande)->commandeMapper.commandeToCommandeDTO(commande)).collect(Collectors.toList());
	    }
	    
	@Override
	public CommandeRespancedto newCommande(CommandeRequestdto commandeRequestDTO) {
		 Commande commande=commandeMapper.commandeDTOtoCommande(commandeRequestDTO);
	        
	        commande.setId(UUID.randomUUID().toString());
	        commande.setDate_commande(new Date());
	        Commande savedCommande=commandeRepository.save(commande);
	       
	        return commandeMapper.commandeToCommandeDTO(savedCommande);
	}

	@Override
	public void deleteCommande(String id) {
		// TODO Auto-generated method stub
		commandeRepository.deleteById(id);
	}

}
