import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardEngineerComponent } from './board-engineer.component';

describe('BoardEngineerComponent', () => {
  let component: BoardEngineerComponent;
  let fixture: ComponentFixture<BoardEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardEngineerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
