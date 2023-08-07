import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLayoutSubtitleComponent } from './sidenav-layout-subtitle.component';

describe('SidenavLayoutSubtitleComponent', () => {
  let component: SidenavLayoutSubtitleComponent;
  let fixture: ComponentFixture<SidenavLayoutSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavLayoutSubtitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavLayoutSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
