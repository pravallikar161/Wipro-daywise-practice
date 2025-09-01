export interface Flight {
  id: number;
  source: string;
  dest: string;
  date: string;     // ISO (YYYY-MM-DD)
  price: number;
  airline?: string;
}

export interface Booking {
  bookingId: number;
  flightId: number;
  name: string;
  email: string;
  amount: number;
  status: 'PENDING' | 'SUCCESS' | 'FAILURE';
}
