import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should set the searchText", () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = "Angular";
    input.dispatchEvent(new CustomEvent("input"));
    expect(component.searchText?.value).toBe("Angular");
  })

  it("should disable search button", () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    component.searchText?.setValue("");
    expect(button.disabled).toBe(true);
  });

  it("should log to the console", () => {
    const spy = spyOn(console, 'log');
    component.searchText?.setValue("Angular");
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
  expect(spy).toHaveBeenCalledWith("You searched for: Angular");
  })
});
