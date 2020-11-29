import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Price, PriceSize } from 'src/app/core/models/products';
import { MeliService } from 'src/app/services/meli.service';

@Component({
  selector: 'app-decimals-price',
  templateUrl: './decimals-price.component.html',
  styleUrls: ['./decimals-price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DecimalsPriceComponent implements OnInit {
  @Input() price: Price;
  @Input() size: PriceSize = PriceSize.small;
  amount: string;
  decimals: string = '';
  constructor(private meliService: MeliService) {}

  ngOnInit(): void {
    this.amount = this.meliService.addThousandSeparator(this.price?.amount);
    if (this.price.decimals !== 0) {
      this.decimals = this.price.decimals.toString().padStart(2, '0');
    }
  }
}
