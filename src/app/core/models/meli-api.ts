export interface SearchMeliApi {
  results: SearchItemMeliApi[];
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
  thumbnail: 'http://http2.mlstatic.com/D_766961-MLA43346235243_092020-I.jpg';
  title: 'Nuevo Peugeot 208 1.6 Feline Tiptronic';
}
