import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubComponent } from './stub.component';
import { StubService } from './stub.service';

const serviceStub: Partial<StubService> = {
  name: 'Boothstomper'
}

describe('StubComponent', () => {
  let component: StubComponent;
  let fixture: ComponentFixture<StubComponent>;
  let msgDisplayed: HTMLElement;
  let service: StubService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StubComponent],
      providers: [
        { provide: StubService, useValue: serviceStub }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StubComponent);
    component = fixture.componentInstance;

    msgDisplayed = fixture.nativeElement.querySelector('span');
    service = TestBed.inject(StubService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('status', () => {
    it('should be on a mission', () => {
      serviceStub.isBusy = false;
      fixture.detectChanges();
      expect(msgDisplayed.textContent).toContain("is on a mission");
    })

    it("should be available", () => {
      service.isBusy = true;
      fixture.detectChanges();
      expect(msgDisplayed.textContent).toContain("is available");
    })
  })
});
