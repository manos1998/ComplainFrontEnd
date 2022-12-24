import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainInfoComponent } from './complain-info.component';

describe('ComplainInfoComponent', () => {
  let component: ComplainInfoComponent;
  let fixture: ComponentFixture<ComplainInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
