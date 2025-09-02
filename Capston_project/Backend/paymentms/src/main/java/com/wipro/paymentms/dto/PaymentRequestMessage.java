package com.wipro.paymentms.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentRequestMessage {
	private String bookingId;
	private double amount;
	private String paymentMode;
	private String cardNumber;
	private String expiry;
	 
	public String getBookingId() {
		return bookingId;
	}
	public void setBookingId(String bookingId) {
		this.bookingId = bookingId;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getPaymentMode() {
		return paymentMode;
	}
	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}
	public String getCardNumber() {
		return cardNumber;
	}
	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}
	public void setExpiry(String expiry) {
		this.expiry = expiry;
	}
	public String getExpiry() {
		// TODO Auto-generated method stub
		return null;
	}
}
