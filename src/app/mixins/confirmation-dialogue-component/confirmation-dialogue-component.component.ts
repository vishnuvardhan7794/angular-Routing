import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-dialogue-component',
  templateUrl: './confirmation-dialogue-component.component.html',
  styleUrls: ['./confirmation-dialogue-component.component.scss']
})
export class ConfirmationDialogueComponentComponent implements OnInit {
  constructor(private modal: NgbActiveModal) {}

  ngOnInit() {}

  @Output('onConfirmation') onConfirmation = new EventEmitter<any>();
  @Input('heading') heading: string = '';
  @Input('body') body: string = '';

  goAhead() {
    this.onConfirmation.emit();
    this.close();
  }

  close() {
    this.modal.dismiss();
  }
}