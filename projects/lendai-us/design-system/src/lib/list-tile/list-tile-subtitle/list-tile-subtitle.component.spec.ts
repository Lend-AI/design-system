import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTileSubtitleComponent } from './list-tile-subtitle.component';

describe('ListTileSubtitleComponent', () => {
  let component: ListTileSubtitleComponent;
  let fixture: ComponentFixture<ListTileSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTileSubtitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListTileSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
