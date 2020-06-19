import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaboutComponent } from './addabout.component';

describe('AddaboutComponent', () => {
  let component: AddaboutComponent;
  let fixture: ComponentFixture<AddaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
