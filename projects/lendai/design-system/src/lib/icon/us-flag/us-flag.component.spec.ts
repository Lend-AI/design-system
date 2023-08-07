import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsFlagComponent } from './us-flag.component';

describe('UsFlagComponent', () => {
  let component: UsFlagComponent;
  let fixture: ComponentFixture<UsFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsFlagComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
