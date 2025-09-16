package com.wipro.payment_ms.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentMessage {
	private Long bookingId;
    private double amount;
    private String mode;

}
