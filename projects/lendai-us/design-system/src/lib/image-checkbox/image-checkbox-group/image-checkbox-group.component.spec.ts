import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCheckboxGroupComponent } from './image-checkbox-group.component';

describe('ImageCheckboxGroupComponent', () => {
  let component: ImageCheckboxGroupComponent;
  let fixture: ComponentFixture<ImageCheckboxGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageCheckboxGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageCheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
