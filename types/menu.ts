export type Category = "todos" | "entradas" | "principais" | "vinhos" | "sobremesas" | "coqueteis";

export interface Dish {
  id: string;
  name: string;
  category: Exclude<Category, "todos">;
  price: number; // MT
  description: string;
  longDescription?: string;
  image: string;
  dietary?: ("Sem Glúten" | "Vegetariano" | "Especial do Chef" | "Marisco Fresco" | "Produção Própria")[];
  calories?: number;
  pairing?: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  role?: string;
  rating: number; // 5
  source: "Google Reviews" | "TripAdvisor" | "Crítica Gastronómica" | "Imprensa";
  comment: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "ambiente" | "pratos" | "cozinha" | "eventos";
  image: string;
  aspect?: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference?: string;
  specialRequests?: string;
}
