import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHostComponent } from './test-host.component';
import { BindingsComponent } from '../bindings/bindings.component';
import { By } from '@angular/platform-browser';

describe('TestHostComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BindingsComponent,
        TestHostComponent,
      ]
    })
    
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const titleDisplay: HTMLElement = fixture.nativeElement.querySelector('p');
    expect(titleDisplay.textContent).toEqual(component.testTitle);
  });

  it('should emit the liked event', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.isFavorite).toBeTrue();
  });

  it('should emit the liked event using debugElement', () => {
    const buttonDe = fixture.debugElement.query(By.css('button'));
    buttonDe.triggerEventHandler('click');
    expect(component.isFavorite).toBeTrue();
  });

});
