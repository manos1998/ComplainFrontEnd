import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardFieldworkerComponent } from './board-fieldworker.component';

describe('BoardFieldworkerComponent', () => {
  let component: BoardFieldworkerComponent;
  let fixture: ComponentFixture<BoardFieldworkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardFieldworkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardFieldworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
