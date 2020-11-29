import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Item, ItemDetail, SearchResult } from '../core/models/products';
import { MeliService } from './meli.service';

describe('MeliService', () => {
  let service: MeliService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MeliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Thousand Separator functionality', () => {
    it('should add dots to a given number with more than 3 digits', () => {
      expect(service.addThousandSeparator(5004)).toBe('5.004');
      expect(service.addThousandSeparator(10678)).toBe('10.678');
      expect(service.addThousandSeparator(999004)).toBe('999.004');
    });
    it('should NOT add dots to a given number with 3 digits or less', () => {
      expect(service.addThousandSeparator(5)).toBe('5');
      expect(service.addThousandSeparator(55)).toBe('55');
      expect(service.addThousandSeparator(999)).toBe('999');
    });
  });

  describe('HttpCalls', () => {
    beforeEach(() => {
      httpMock = TestBed.inject(HttpTestingController);
    });
    it(' should call getSearch http Get method with the correct route', () => {
      //Arrange
      const searchResult: SearchResult = {
        author: { lastname: 'Franzani', name: 'Jero' },
        categories: [],
        items: [],
      };

      //Act
      service.getSearch('producto').subscribe((result) => {
        expect(result).toEqual(searchResult);
      });

      const request = httpMock.expectOne(
        `${service.rootUrl}/api/items?q=:producto`
      );
      expect(request.request.method).toBe('GET');
      request.flush(searchResult);
    });

    it(' should call getProduct http Get method with the correct route', () => {
      //Arrange
      const mockedItem: Item = {
        id: 'string',
        title: 'string',
        price: { amount: 200, currency: 'ARS', decimals: 0 },
        picture: 'string',
        condition: 'string',
        free_shipping: true,
        state_name: 'string',
      };
      const itemDetail: ItemDetail = {
        author: { lastname: 'Franzani', name: 'Jero' },
        item: mockedItem,
      };

      //Act
      service.getProduct('id123').subscribe((result) => {
        expect(result).toEqual(itemDetail);
      });

      const request = httpMock.expectOne(`${service.rootUrl}/api/items/id123`);
      expect(request.request.method).toBe('GET');
      request.flush(itemDetail);
    });

    it(' should call getCategoriesByCategoryId http Get method with the correct route', () => {
      //Arrange
      const mockedCategories = [{ name: 'Cat1' }];

      //Act
      service.getCategoriesByCategoryId('category123').subscribe((result) => {
        expect(result).toEqual(mockedCategories);
      });

      const request = httpMock.expectOne(
        `${service.rootUrl}/api/category123/categories`
      );
      expect(request.request.method).toBe('GET');
      request.flush(mockedCategories);
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
