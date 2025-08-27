import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2ngClassdemo } from './ex2ng-classdemo';

describe('Ex2ngClassdemo', () => {
  let component: Ex2ngClassdemo;
  let fixture: ComponentFixture<Ex2ngClassdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex2ngClassdemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex2ngClassdemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
