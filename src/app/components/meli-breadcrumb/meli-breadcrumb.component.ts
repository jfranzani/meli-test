import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-meli-breadcrumb',
  templateUrl: './meli-breadcrumb.component.html',
  styleUrls: ['./meli-breadcrumb.component.scss'],
})
export class MeliBreadcrumbComponent implements OnInit {
  @Input() categories: string[] = [];
  @Output() onCategoryClicked: EventEmitter<string>;
  constructor() {}

  ngOnInit(): void {}

  onCategorySelected(categoryName: string) {
    this.onCategoryClicked.emit(categoryName);
  }
}
