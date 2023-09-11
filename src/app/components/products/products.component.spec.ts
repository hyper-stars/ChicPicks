import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ProductsService } from 'src/app/services/products.service';
import { UserFilterService } from 'src/app/services/user-filter.service';
import { AppModule } from 'src/app/app.module';
import { Product } from 'src/models/product';
import { of } from 'rxjs';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [AppModule],
    });
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ProductsService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return some products', async () => {

    const response: Product[] = [];

    spyOn(service, 'GetAll').and.returnValue(of(response))

    component.fetchProducts();

    fixture.detectChanges();

    expect(component.productsList).toEqual(response);

  });

  // it('should have price', fakeAsync(() => {
  //   const response: Product[] = []; 

  //   spyOn(service, 'GetAll').and.returnValue(of(response));
  //   component.fetchProducts();

  //   // Use tick to simulate the passage of time for asynchronous operations
  //   tick(5000);

  //   fixture.detectChanges();
  //   tick(5000);

  //   const compiled = fixture.nativeElement as HTMLElement;

  //   const productPrice = compiled.querySelector('.product-price');
  //   tick(5000);

  //   console.log("compiled", compiled);
  //   console.log("html", productPrice);

  //   // Add your expectations here
  // }));
});
