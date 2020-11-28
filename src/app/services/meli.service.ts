import { Injectable } from '@angular/core';
import { http } from '../core/helpers/request-utilities';
import { SearchMeliApi } from '../core/models/meli-api';
import { Author, Item, Price, SearchResult } from '../core/models/search';

@Injectable({
  providedIn: 'root',
})
export class MeliService {
  constructor() {}

  getPrice(price: string, currency: string): Price {
    let amount = 0;
    let decimals = 0;
    if (price.indexOf('.') !== -1) {
      const priceSplitted = price.split('.');
      amount = Number(priceSplitted[0]);
      decimals = Number(priceSplitted[1]);
    } else {
      amount = Number(price);
      decimals = 0;
    }

    // Parece que para la localización en español muestra recién el separador de miles después de 4 digitos
    // https://stackoverflow.com/questions/57628055/tolocalestring-not-working-on-numbers-less-than-10000-in-all-browsers
    const fullPrice = new Intl.NumberFormat('es-AR', {
      currency,
      maximumFractionDigits: 2,
      style: 'decimal',
    }).format(+price);
    return {
      amount,
      decimals,
      currency,
      fullPrice,
    };
  }

  mapApiSearchResultToItems(meliSearchResult: SearchMeliApi): SearchResult {
    const author: Author = {
      name: 'Jerónimo',
      lastname: 'Franzani',
    };
    let items: Item[] = [];

    items = meliSearchResult.results.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: this.getPrice(item.price.toString(), item.currency_id),
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        state_name: item.address.state_name,
      };
    });

    return {
      author,
      categories: [],
      items,
    };
  }

  async getSearch(query: string = ''): Promise<SearchResult> {
    const res = await http<SearchMeliApi>(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}#json`
    );
    return this.mapApiSearchResultToItems(res.parsedBody);
  }
}
