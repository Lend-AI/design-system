import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNavBarLinkComponent } from './tab-nav-bar-link.component';

describe('TabNavbarLinkComponent', () => {
  let component: TabNavBarLinkComponent;
  let fixture: ComponentFixture<TabNavBarLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabNavBarLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabNavBarLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
