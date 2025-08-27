import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vechilecomp } from './vechilecomp';

describe('Vechilecomp', () => {
  let component: Vechilecomp;
  let fixture: ComponentFixture<Vechilecomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vechilecomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vechilecomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
