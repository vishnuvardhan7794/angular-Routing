import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { Subject } from 'rxjs';
import { ConfirmationDialogueComponentComponent } from 'src/app/mixins/confirmation-dialogue-component/confirmation-dialogue-component.component';

type ModalType = {
  ngModalService: NgbModal;
};

type GConstructor<T = {}> = new (...args: any[]) => T;

export function confirmationDialogueMixinFunction<
  BaseType extends GConstructor<ModalType>
>(baseClass: BaseType) {
  return class extends baseClass {
    constructor(...args: any[]) {
      super(...args);
    }
    openConfirmDialogue(modalOptions: any, data: any) {
      const modalReference = this.ngModalService.open(
        ConfirmationDialogueComponentComponent,
        modalOptions
      );
      modalReference.componentInstance.body = data.body;
      modalReference.componentInstance.heading = data.heading;
      return modalReference.componentInstance.onConfirmation;
    }
  }
}

export function commonObservableUnsubscribeMixinFunction<
  BaseType extends GConstructor
>(BaseClass: BaseType) {
  return class extends BaseClass {
    private unsubscribeSubject = new Subject<void>();
    destroy() {
      this.unsubscribeSubject.next();
      this.unsubscribeSubject.complete();
    }
    getObservable() {
      return this.unsubscribeSubject;
    }
  }
}