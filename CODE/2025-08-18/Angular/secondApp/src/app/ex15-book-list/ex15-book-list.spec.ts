import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex15BookList } from './ex15-book-list';

describe('Ex15BookList', () => {
  let component: Ex15BookList;
  let fixture: ComponentFixture<Ex15BookList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex15BookList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex15BookList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
