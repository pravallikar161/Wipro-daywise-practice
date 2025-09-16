import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookingcomp } from './bookingcomp';

describe('Bookingcomp', () => {
  let component: Bookingcomp;
  let fixture: ComponentFixture<Bookingcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bookingcomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bookingcomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
