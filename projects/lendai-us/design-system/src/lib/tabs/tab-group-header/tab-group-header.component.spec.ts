import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupHeaderComponent } from './tab-group-header.component';

describe('TabHeaderComponent', () => {
  let component: TabGroupHeaderComponent;
  let fixture: ComponentFixture<TabGroupHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabGroupHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabGroupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
