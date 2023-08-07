import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLayoutTitleComponent } from './sidenav-layout-title.component';

describe('SidenavLayoutTitleComponent', () => {
  let component: SidenavLayoutTitleComponent;
  let fixture: ComponentFixture<SidenavLayoutTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavLayoutTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavLayoutTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
