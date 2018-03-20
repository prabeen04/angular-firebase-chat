import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellComponent } from './travell.component';

describe('TravellComponent', () => {
  let component: TravellComponent;
  let fixture: ComponentFixture<TravellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
