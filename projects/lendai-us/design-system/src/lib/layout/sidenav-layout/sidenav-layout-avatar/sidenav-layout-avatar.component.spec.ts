import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLayoutAvatarComponent } from './sidenav-layout-avatar.component';

describe('SidenavLayoutAvatarComponent', () => {
  let component: SidenavLayoutAvatarComponent;
  let fixture: ComponentFixture<SidenavLayoutAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavLayoutAvatarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavLayoutAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
