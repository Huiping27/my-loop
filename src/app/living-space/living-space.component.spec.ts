import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingSpaceComponent } from './living-space.component';

describe('LivingSpaceComponent', () => {
  let component: LivingSpaceComponent;
  let fixture: ComponentFixture<LivingSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivingSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivingSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
