import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from '../core/models/search';

@Injectable({
  providedIn: 'root',
})
export class MeliService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get the search list based on a search key
   * @param query term to search
   */
  getSearch(query: string = ''): Observable<SearchResult> {
    return this.httpClient.get<any>(
      `http://localhost:3000/api/items?q=:${query}`
    );
  }
}
