import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeliBreadcrumbComponent } from './meli-breadcrumb.component';

describe('MeliBreadcrumbComponent', () => {
  let component: MeliBreadcrumbComponent;
  let fixture: ComponentFixture<MeliBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeliBreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeliBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
