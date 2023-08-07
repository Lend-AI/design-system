import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideDrawerWarningComponent } from './side-drawer-warning.component';

describe('SideDrawerWarningComponent', () => {
  let component: SideDrawerWarningComponent;
  let fixture: ComponentFixture<SideDrawerWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideDrawerWarningComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SideDrawerWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
