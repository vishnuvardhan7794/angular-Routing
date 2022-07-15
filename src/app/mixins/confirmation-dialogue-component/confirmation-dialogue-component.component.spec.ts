import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogueComponentComponent } from './confirmation-dialogue-component.component';

describe('ConfirmationDialogueComponentComponent', () => {
  let component: ConfirmationDialogueComponentComponent;
  let fixture: ComponentFixture<ConfirmationDialogueComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationDialogueComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDialogueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
