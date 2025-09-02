package com.wipro.paymentms.dto;
import lombok.*;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentResultMessage {
	public PaymentResultMessage(String bookingId2, String status2, String reason2) {
		// TODO Auto-generated constructor stub
	}
	public String getBookingId() {
		return bookingId;
	}
	public void setBookingId(String bookingId) {
		this.bookingId = bookingId;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	private String bookingId;
	private String status;
	private String reason;
}
