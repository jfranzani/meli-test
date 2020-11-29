import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToDetailsList(searchTerm: string) {
    this.router.navigate(['/items'], {
      queryParams: { search: searchTerm },
    });
  }
}
