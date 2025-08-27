import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1home } from './ex1home';

describe('Ex1home', () => {
  let component: Ex1home;
  let fixture: ComponentFixture<Ex1home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex1home]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex1home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
