import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { confirmationDialogueMixinFunction, commonObservableUnsubscribeMixinFunction } from 'src/app/services/mixins/mixin';


const firstComponentMixin = commonObservableUnsubscribeMixinFunction(
  confirmationDialogueMixinFunction(
    class Parent {
      constructor(public ngModalService: NgbModal) { }
    }
  )
)

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent extends firstComponentMixin implements OnInit {
  public modalOptions: NgbModalOptions = {};
  public subscriptions: Subscription[] = [];
  constructor(public ngModalService: NgbModal, public dataService: DataserviceService) {
    super(ngModalService)
  }
  ngOnDestroy() {
    this.destroy();
    console.log('Are the Subscriptions of FirstComponent closed ?');
    console.log(this.subscriptions);
  }

  ngOnInit(): void {
  }
  confirmAction(details: any) {
    this.modalOptions.backdrop = 'static';
    this.modalOptions.keyboard = false;
    this.modalOptions.windowClass = 'first-component-confirm-modal';
    let data = {
      heading: `Confirm ${details.action}`,
      body: `Please confirm if you want to delete this post with ID <b>${details.postId}</b>.`,
    };
    this.openConfirmDialogue(this.modalOptions, data).subscribe((data: any) => {
      this.deleteExistingPost(details.postId);
    });
  }


  deleteExistingPost(postId: number) {
    let subs = this.dataService
      .deletePost(postId)
      .pipe(takeUntil(this.getObservable()))
      .subscribe((x) => console.log(x));

    this.subscriptions.push(subs);
  }



}
