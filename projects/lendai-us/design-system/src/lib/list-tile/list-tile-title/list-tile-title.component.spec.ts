import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTileTitleComponent } from './list-tile-title.component';

describe('ListTileTitleComponent', () => {
  let component: ListTileTitleComponent;
  let fixture: ComponentFixture<ListTileTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTileTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListTileTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
