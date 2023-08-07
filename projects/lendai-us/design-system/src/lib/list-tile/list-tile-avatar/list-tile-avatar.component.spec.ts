import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTileAvatarComponent } from './list-tile-avatar.component';

describe('ListTileAvatarComponent', () => {
  let component: ListTileAvatarComponent;
  let fixture: ComponentFixture<ListTileAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTileAvatarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListTileAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
