import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGallaryComponent } from './image-gallary.component';

describe('ImageGallaryComponent', () => {
  let component: ImageGallaryComponent;
  let fixture: ComponentFixture<ImageGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
