import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, SearchResult } from '../core/models/search';
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
    this.searchParams = this.route.snapshot?.queryParamMap?.get('search') || '';
    this.doSearch();
  }

  async doSearch() {
    this.searchResult = await this.meliService.getSearch(this.searchParams);
    this.meliService.getTest().subscribe((res) => {
      console.log(res);
    });
    console.log(this.searchResult);
  }
}
