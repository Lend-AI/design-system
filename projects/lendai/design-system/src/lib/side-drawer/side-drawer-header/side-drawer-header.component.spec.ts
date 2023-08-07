import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideDrawerHeaderComponent } from './side-drawer-header.component';

describe('SideDrawerHeaderComponent', () => {
  let component: SideDrawerHeaderComponent;
  let fixture: ComponentFixture<SideDrawerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideDrawerHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SideDrawerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
