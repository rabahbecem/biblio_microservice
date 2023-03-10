package com.adria.billingservice.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import com.adria.billingservice.entities.Customer;

@Data @NoArgsConstructor @AllArgsConstructor
public class InvoiceRequestDTO {
	 private BigDecimal amount;
    private String customerID;
   
}
