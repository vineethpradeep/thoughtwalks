import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerOutcomesComponent } from './learner-outcomes.component';

describe('LearnerOutcomesComponent', () => {
  let component: LearnerOutcomesComponent;
  let fixture: ComponentFixture<LearnerOutcomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnerOutcomesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnerOutcomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
