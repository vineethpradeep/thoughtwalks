import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStepComponent } from './about-step.component';

describe('AboutStepComponent', () => {
  let component: AboutStepComponent;
  let fixture: ComponentFixture<AboutStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
