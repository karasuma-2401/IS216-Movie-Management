export type SeatType = "Regular" | "VIP" | "Couple" | "Blocked" | "Aisle";

export interface Seat {
  id: string;
  row: number;
  col: number;
  type: SeatType;
  label: string;
}

export interface SeatTypeConfig {
  type: SeatType;
  color: string;
  price: number;
}

export interface Room {
  id: string;
  roomId: string;
  name: string;
  description: string;
  rowCount: number;
  colCount: number;
  seats: Seat[];
  seatTypeConfigs: SeatTypeConfig[];
  createdAt: string;
}
