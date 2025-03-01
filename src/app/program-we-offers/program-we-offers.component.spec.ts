import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramWeOffersComponent } from './program-we-offers.component';

describe('ProgramWeOffersComponent', () => {
  let component: ProgramWeOffersComponent;
  let fixture: ComponentFixture<ProgramWeOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramWeOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramWeOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
