import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComplFldComponent } from './add-compl-fld.component';

describe('AddComplFldComponent', () => {
  let component: AddComplFldComponent;
  let fixture: ComponentFixture<AddComplFldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComplFldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComplFldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
