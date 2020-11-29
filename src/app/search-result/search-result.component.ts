import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, SearchResult } from '../core/models/products';
import { MeliService } from '../services/meli.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  items: Item[];
  searchResult: SearchResult;
  searchParams: string;

  constructor(
    private route: ActivatedRoute,
    private meliService: MeliService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchParams = params.search || '';
      this.doSearch();
    });
  }

  doSearch() {
    this.meliService.getSearch(this.searchParams).subscribe((res) => {
      res.items = res.items.slice(0, 4);
      this.searchResult = res;
    });
  }
}
