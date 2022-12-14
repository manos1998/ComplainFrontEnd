import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComplainComponent } from './add-complain.component';

describe('AddComplainComponent', () => {
  let component: AddComplainComponent;
  let fixture: ComponentFixture<AddComplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComplainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
