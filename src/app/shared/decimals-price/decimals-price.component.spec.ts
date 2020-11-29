import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalsPriceComponent } from './decimals-price.component';

describe('DecimalsPriceComponent', () => {
  let component: DecimalsPriceComponent;
  let fixture: ComponentFixture<DecimalsPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecimalsPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimalsPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
