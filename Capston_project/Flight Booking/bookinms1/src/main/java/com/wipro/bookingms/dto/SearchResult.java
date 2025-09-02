package com.wipro.bookingms.dto;

public class SearchResult {
    private String flightId;
    private String airlineName;
    private String flightNumber;
    private String departureTime;
    private String arrivalTime;
    private double price;

    // Constructor
    public SearchResult(String flightId, String airlineName, String flightNumber,
                        String departureTime, String arrivalTime, double price) {
        this.flightId = flightId;
        this.airlineName = airlineName;
        this.flightNumber = flightNumber;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.price = price;
    }

    // Getters and Setters
    public String getFlightId() { return flightId; }
    public void setFlightId(String flightId) { this.flightId = flightId; }

    public String getAirlineName() { return airlineName; }
    public void setAirlineName(String airlineName) { this.airlineName = airlineName; }

    public String getFlightNumber() { return flightNumber; }
    public void setFlightNumber(String flightNumber) { this.flightNumber = flightNumber; }

    public String getDepartureTime() { return departureTime; }
    public void setDepartureTime(String departureTime) { this.departureTime = departureTime; }

    public String getArrivalTime() { return arrivalTime; }
    public void setArrivalTime(String arrivalTime) { this.arrivalTime = arrivalTime; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
}

