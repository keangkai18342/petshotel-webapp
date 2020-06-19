import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbountComponent } from './abount.component';

describe('AbountComponent', () => {
  let component: AbountComponent;
  let fixture: ComponentFixture<AbountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
