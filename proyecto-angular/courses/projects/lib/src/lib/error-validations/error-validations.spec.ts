import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorValidations } from './error-validations';

describe('ErrorValidations', () => {
  let component: ErrorValidations;
  let fixture: ComponentFixture<ErrorValidations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorValidations],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorValidations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
