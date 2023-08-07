import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLayoutContentComponent } from './sidenav-layout-content.component';

describe('SidenavLayoutContentComponent', () => {
  let component: SidenavLayoutContentComponent;
  let fixture: ComponentFixture<SidenavLayoutContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavLayoutContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavLayoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
