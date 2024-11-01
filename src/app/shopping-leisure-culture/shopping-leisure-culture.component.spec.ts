import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingLeisureCultureComponent } from './shopping-leisure-culture.component';

describe('ShoppingLeisureCultureComponent', () => {
  let component: ShoppingLeisureCultureComponent;
  let fixture: ComponentFixture<ShoppingLeisureCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingLeisureCultureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingLeisureCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
