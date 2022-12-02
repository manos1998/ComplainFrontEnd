import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComplEmpComponent } from './add-compl-emp.component';

describe('AddComplEmpComponent', () => {
  let component: AddComplEmpComponent;
  let fixture: ComponentFixture<AddComplEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComplEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComplEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
