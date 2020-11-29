import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalsPriceComponent } from './decimals-price.component';

describe('DecimalsPriceComponent', () => {
  let component: DecimalsPriceComponent;
  let fixture: ComponentFixture<DecimalsPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecimalsPriceComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimalsPriceComponent);
    component = fixture.componentInstance;
    component.price = {
      decimals: 20,
      amount: 400,
      currency: 'ARS',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
