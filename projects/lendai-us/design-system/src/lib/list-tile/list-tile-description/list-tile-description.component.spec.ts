import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTileDescriptionComponent } from './list-tile-description.component';

describe('ListTileDescriptionComponent', () => {
  let component: ListTileDescriptionComponent;
  let fixture: ComponentFixture<ListTileDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTileDescriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListTileDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
