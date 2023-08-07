import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTileGroupComponent } from './list-tile-group.component';

describe('ListTileGroupComponent', () => {
  let component: ListTileGroupComponent;
  let fixture: ComponentFixture<ListTileGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTileGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListTileGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
