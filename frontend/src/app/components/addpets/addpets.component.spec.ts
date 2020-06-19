import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpetsComponent } from './addpets.component';

describe('AddpetsComponent', () => {
  let component: AddpetsComponent;
  let fixture: ComponentFixture<AddpetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
