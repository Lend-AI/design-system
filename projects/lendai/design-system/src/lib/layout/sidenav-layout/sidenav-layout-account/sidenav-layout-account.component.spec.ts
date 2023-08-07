import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLayoutAccountComponent } from './sidenav-layout-account.component';

describe('SidenavLayoutAccountComponent', () => {
  let component: SidenavLayoutAccountComponent;
  let fixture: ComponentFixture<SidenavLayoutAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavLayoutAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavLayoutAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
