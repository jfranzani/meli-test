import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, ItemDetail } from '../core/models/products';
import { MeliService } from '../services/meli.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  product: Item;
  constructor(
    private route: ActivatedRoute,
    private meliService: MeliService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.getProductDetail(this.productId);
    });
  }

  getProductDetail(id: string) {
    this.meliService.getProduct(id).subscribe((res: ItemDetail) => {
      this.product = res.item;
      this.product.price.fullPrice = this.meliService.addThousandSeparator(
        this.product.price.amount
      );
    });
  }
}
