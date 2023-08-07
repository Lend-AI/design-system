import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanLayoutLeftComponent } from './clean-layout-left.component';

describe('CleanLayoutLeftComponent', () => {
  let component: CleanLayoutLeftComponent;
  let fixture: ComponentFixture<CleanLayoutLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CleanLayoutLeftComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CleanLayoutLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
