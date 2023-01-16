package com.example.demo.mappers;

import org.mapstruct.Mapper;


import com.example.demo.Model.Commande;
import com.example.demo.dto.CommandeRequestdto;
import com.example.demo.dto.CommandeRespancedto;

@Mapper(componentModel = "spring")
public interface CommandeMapper {
	CommandeRespancedto commandeToCommandeDTO(Commande commande);
	    Commande commandeDTOtoCommande(CommandeRequestdto commandeRequestDTO);

}
