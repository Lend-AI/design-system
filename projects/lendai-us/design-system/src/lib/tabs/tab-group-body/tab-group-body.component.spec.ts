import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupBodyComponent } from './tab-group-body.component';

describe('TabBodyComponent', () => {
  let component: TabGroupBodyComponent;
  let fixture: ComponentFixture<TabGroupBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabGroupBodyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabGroupBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
