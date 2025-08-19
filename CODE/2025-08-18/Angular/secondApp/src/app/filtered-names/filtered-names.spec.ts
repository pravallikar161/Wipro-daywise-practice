import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredNames } from './filtered-names';

describe('FilteredNames', () => {
  let component: FilteredNames;
  let fixture: ComponentFixture<FilteredNames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteredNames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredNames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
