import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movielistcomp } from './movielistcomp';

describe('Movielistcomp', () => {
  let component: Movielistcomp;
  let fixture: ComponentFixture<Movielistcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Movielistcomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movielistcomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
