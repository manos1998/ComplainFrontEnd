import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardcomlpainComponent } from './boardcomlpain.component';

describe('BoardcomlpainComponent', () => {
  let component: BoardcomlpainComponent;
  let fixture: ComponentFixture<BoardcomlpainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardcomlpainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardcomlpainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
