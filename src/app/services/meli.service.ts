import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Price } from 'server/core/models/models';
import { Item, ItemDetail, SearchResult } from '../core/models/products';

@Injectable({
  providedIn: 'root',
})
export class MeliService {
  public rootUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  getFullPrice(price: Price) {
    // Parece que para la localización en español muestra recién el separador de miles después de 4 digitos
    // https://stackoverflow.com/questions/57628055/tolocalestring-not-working-on-numbers-less-than-10000-in-all-browsers
    const fullPrice = new Intl.NumberFormat('es-AR', {
      currency: price.currency,
      maximumFractionDigits: 2,
      style: 'decimal',
    }).format(price.amount);

    return fullPrice;
  }

  addThousandSeparator(number: number | string) {
    const format = (num) =>
      String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1.');
    return format(number);
  }

  /**
   * Get the search list based on a search key
   * @param query term to search
   */
  getSearch(query: string = ''): Observable<SearchResult> {
    return this.httpClient.get<any>(`${this.rootUrl}/api/items?q=:${query}`);
  }

  getProduct(id: string) {
    return this.httpClient.get<ItemDetail>(`${this.rootUrl}/api/items/${id}`);
  }

  getCategoriesByCategoryId(categoryId: string) {
    return this.httpClient.get<[{ name: string }]>(
      `${this.rootUrl}/api/${categoryId}/categories`
    );
  }
}
