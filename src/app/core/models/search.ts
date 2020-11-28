export interface SearchResult {
  author: Author;
  categories?: string[];
  items: Item[];
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  state_name: string;
  sold_quantity?: number;
  description?: string;
}

export interface ItemDetail {
  author: Author;
  item: Item;
}

export interface Price {
  fullPrice?: string;
  currency: string;
  amount: number;
  decimals: number;
}

export interface Author {
  name: string;
  lastname: string;
}
