import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1displaylist } from './ex1displaylist';

describe('Ex1displaylist', () => {
  let component: Ex1displaylist;
  let fixture: ComponentFixture<Ex1displaylist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex1displaylist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex1displaylist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
