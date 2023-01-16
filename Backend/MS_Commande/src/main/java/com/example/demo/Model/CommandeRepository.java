package com.example.demo.Model;


import org.springframework.data.jpa.repository.JpaRepository;


public interface CommandeRepository extends JpaRepository<Commande, String>
{  
	
}
