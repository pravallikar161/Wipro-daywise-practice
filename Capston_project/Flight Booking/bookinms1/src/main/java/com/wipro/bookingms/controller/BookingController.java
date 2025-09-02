package com.wipro.bookingms.controller;

	import com.wipro.bookingms.dto.SearchRequest;
	import com.wipro.bookingms.dto.SearchResult;
	import com.wipro.bookingms.service.BookingService;
	import io.swagger.v3.oas.annotations.Operation;
	import io.swagger.v3.oas.annotations.tags.Tag;
	import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.*;

	import java.util.List;

	@RestController
	@RequestMapping("/api/bookings")
	@Tag(name = "BookingMS", description = "Booking microservice APIs")
	public class BookingController {

	    private final BookingService bookingService;

	    public BookingController(BookingService bookingService) {
	        this.bookingService = bookingService;
	    }

	    @Operation(summary = "Health check")
	    @GetMapping("/health")
	    public ResponseEntity<String> health() {
	        return ResponseEntity.ok("Booking MS is up");
	    }

	    @Operation(summary = "Search flights (stub for Day-1)")
	    @PostMapping("/search")
	    public ResponseEntity<List<SearchResult>> search(@RequestBody SearchRequest request) {
	        List<SearchResult> results = bookingService.searchFlights(request);
	        if (results.isEmpty()) {
	            return ResponseEntity.noContent().build();
	        }
	        return ResponseEntity.ok(results);
	    }
	}


