export interface SearchMeliApi {
  results: SearchItemMeliApi[];
  filters: [
    {
      id: string;
      values: Categories[];
    }
  ];
}

export interface SearchItemMeliApi {
  shipping: {
    free_shipping: boolean;
  };
  address: {
    state_name: string;
  };
  accepts_mercadopago: boolean;
  available_quantity: number;
  buying_mode: string;
  catalog_product_id: string;
  category_id: string;
  condition: string;
  currency_id: string;
  domain_id: string;
  id: string;
  permalink: string;
  price: number;
  sold_quantity: number;
  thumbnail: string;
  title: string;
}

export interface Categories {
  id: string;
  name: string;
  path_from_root: IdName[];
}

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
  free_shipping?: boolean;
  state_name: string;
  sold_quantity?: number;
  description?: string;
  category_id?: string;
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

export interface IdName {
  id: string;
  name: string;
}
