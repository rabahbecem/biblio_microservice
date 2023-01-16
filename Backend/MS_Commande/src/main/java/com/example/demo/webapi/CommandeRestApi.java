package com.example.demo.webapi;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CommandeRequestdto;
import com.example.demo.dto.CommandeRespancedto;
import com.example.demo.services.CommandeService;


@CrossOrigin("*")
@RestController
@RequestMapping(path = "/api")
public class CommandeRestApi {

	 private CommandeService commandeService;

	    public CommandeRestApi(CommandeService commandeService) {
	        this.commandeService = commandeService;
	    }

	    @GetMapping(path = "/commandes")
	    public List<CommandeRespancedto> invoices(){
	        return commandeService.listCommandes();
	    }
	    @GetMapping(path = "/commandes/{id}")
	    public CommandeRespancedto commande(@PathVariable String id){
	        return commandeService.getCommande(id);
	    }
	    @PostMapping(path="/commandes")
	    public CommandeRespancedto save(@RequestBody CommandeRequestdto commandeRequestDTO){
	        return commandeService.newCommande(commandeRequestDTO);
	    }
	    @DeleteMapping(path = "/commandes/{id}")
	    public void delete(@PathVariable String id){
	    	commandeService.deleteCommande(id);
	    }
	}


