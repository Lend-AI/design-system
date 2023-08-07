import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTileItemComponent } from './list-tile-item.component';

describe('ListTileItemComponent', () => {
  let component: ListTileItemComponent;
  let fixture: ComponentFixture<ListTileItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTileItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListTileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
