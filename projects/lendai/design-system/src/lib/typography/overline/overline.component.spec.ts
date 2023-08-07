import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlineComponent } from './overline.component';

describe('OverlineComponent', () => {
  let component: OverlineComponent;
  let fixture: ComponentFixture<OverlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OverlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
