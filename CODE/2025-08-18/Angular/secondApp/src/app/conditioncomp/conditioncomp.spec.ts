import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conditioncomp } from './conditioncomp';

describe('Conditioncomp', () => {
  let component: Conditioncomp;
  let fixture: ComponentFixture<Conditioncomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conditioncomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conditioncomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
