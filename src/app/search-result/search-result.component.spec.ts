import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MeliBreadcrumbModule } from '../components/meli-breadcrumb/meli-breadcrumb.module';
import { MeliService } from '../services/meli.service';
import { SharedModule } from '../shared/shared.module';

import { SearchResultComponent } from './search-result.component';

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;
  let meliService: MeliService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchResultComponent],
      imports: [
        RouterTestingModule,
        MeliBreadcrumbModule,
        SharedModule,
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ search: 'coco' }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    meliService = TestBed.inject(MeliService);
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    spyOn(meliService, 'getSearch').and.returnValue(of());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
