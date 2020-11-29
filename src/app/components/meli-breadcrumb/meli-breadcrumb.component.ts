import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meli-breadcrumb',
  templateUrl: './meli-breadcrumb.component.html',
  styleUrls: ['./meli-breadcrumb.component.scss'],
})
export class MeliBreadcrumbComponent implements OnInit {
  @Input() categories: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
