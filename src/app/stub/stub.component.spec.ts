import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubComponent } from './stub.component';
import { StubService } from './stub.service';

const serviceStub: Partial<StubService> = {
  name: "Boothstomper"
}

describe('StubComponent', () => {
  let component: StubComponent;
  let fixture: ComponentFixture<StubComponent>;
  let msg: HTMLElement;
  let service: StubService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StubComponent],
      providers: [
        { provide: StubService, useValue: serviceStub }
      ]
    })
    
    
    fixture = TestBed.createComponent(StubComponent);
    component = fixture.componentInstance;
    msg = fixture.nativeElement.querySelector('span');
    service = TestBed.inject(StubService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("status", () => {
    it("should be on a mission", () => {
      service.isBusy = true;
      fixture.detectChanges();
      expect(msg.textContent).toContain(" is on a mission");
    })
    it("should be available", () => {
      service.isBusy = false;
      fixture.detectChanges();
      expect(msg.textContent).toContain(" is available");
    })
  })

});
