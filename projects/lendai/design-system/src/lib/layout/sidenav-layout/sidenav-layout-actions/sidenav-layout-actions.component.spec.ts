import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLayoutActionsComponent } from './sidenav-layout-actions.component';

describe('SidenavLayoutActionsComponent', () => {
  let component: SidenavLayoutActionsComponent;
  let fixture: ComponentFixture<SidenavLayoutActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavLayoutActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavLayoutActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
