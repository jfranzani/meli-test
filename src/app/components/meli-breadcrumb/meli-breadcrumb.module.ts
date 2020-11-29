import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeliBreadcrumbComponent } from './meli-breadcrumb.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MeliBreadcrumbComponent],
  imports: [CommonModule, RouterModule],
  exports: [MeliBreadcrumbComponent],
})
export class MeliBreadcrumbModule {}
