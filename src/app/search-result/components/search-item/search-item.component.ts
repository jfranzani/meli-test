import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Item } from 'src/app/core/models/search';
import { MeliService } from 'src/app/services/meli.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent implements OnInit {
  @Input() item: Item;
  constructor(private meliService: MeliService) {}

  ngOnInit(): void {
    this.item.price.fullPrice = this.meliService.addThousandSeparator(
      this.item.price.amount
    );
  }
}
