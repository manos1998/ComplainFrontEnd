import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoupdateComponent } from './userinfoupdate.component';

describe('UserinfoupdateComponent', () => {
  let component: UserinfoupdateComponent;
  let fixture: ComponentFixture<UserinfoupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfoupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserinfoupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
