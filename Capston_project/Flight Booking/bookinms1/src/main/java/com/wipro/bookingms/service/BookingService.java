package com.wipro.bookingms.service;

	import com.wipro.bookingms.dto.SearchRequest;
	import com.wipro.bookingms.dto.SearchResult;
	import org.springframework.stereotype.Service;

	import java.util.ArrayList;
	import java.util.List;

	@Service
	public class BookingService {

	    // For Day-1 return mock results; later this will call Flight Data MS (REST)
	    public List<SearchResult> searchFlights(SearchRequest req) {
	        List<SearchResult> results = new ArrayList<>();
	        // Mock result 1
	        results.add(new SearchResult("FL-1001","AirWipro","AW1001","09:00","11:00", 4500.0));
	        // Mock result 2
	        results.add(new SearchResult("FL-1002","AirWipro","AW1002","13:00","15:00", 5200.0));
	        return results;
	    }
	}

