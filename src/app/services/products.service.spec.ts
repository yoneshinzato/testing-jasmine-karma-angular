import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  it("should get products", () => {
    service.getProducts().subscribe();
    const req = httpTestingController.expectOne('https://fakestoreapi.com/products');
    expect(req.request.method).toBe('GET');
  })

  
  it("should add a product", () => {
    service.addProduct("test", 1).subscribe();
    const req = httpTestingController.expectOne('https://fakestoreapi.com/products');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({title: "test", price: 1});
  })

  afterEach(() => {
    httpTestingController.verify();
  });
  
});
