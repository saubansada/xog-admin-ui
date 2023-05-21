import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { enumToKeyValueArray } from 'src/app/models/common';
import { RedeemRequest, ReemRequestStatus } from 'src/app/models/redeem-request';
import { RedeemRequestService } from 'src/app/services/payment-request.service';
import { BaseComponent } from 'src/app/shared/base.component';

declare var UIkit: any;

@Component({
  selector: 'app-payment-requests',
  templateUrl: './payment-requests.component.html',
  styleUrls: ['./payment-requests.component.scss']
})
export class PaymentRequestsComponent extends BaseComponent implements OnInit {

 
  modalId: string = 'payment-request-detail';

  _modalDialog: any;

  get modalDialog(): any {
    if(this._modalDialog == null) {
      this._modalDialog = UIkit.modal('#payment-request-detail'); 
    }
    return this._modalDialog;
  }

  formInstance: FormGroup = this.fb.group({
    ReqeustId: [],
    RequestStatus: []
  })

  public redeemRequestStatuses: any = enumToKeyValueArray(ReemRequestStatus);

  redeemRequestList: RedeemRequest[] = [];
  redeemRequest: RedeemRequest;
  
  constructor(protected injector: Injector, protected redeemRequestService: RedeemRequestService) {
    super(injector);
  }

  ngOnInit(): void {
    
 
    this.loadRedeemHistory();
  }
  
  loadRedeemHistory() {
    this.redeemRequestService.getRedeemRequestList().subscribe(res => {
      this.redeemRequestList = res.Data;
      this.redeemRequestList = [
        {
          Id: 1,
          RequestedByUserId: '4345',
          BankAccountNumber: '43453453',
          RequestedUserFullName: 'Sada',
          BankAccountId: 22,
          PhoneNumber: '6666666666',
          Amount: 100,
          BankName: 'ICICI',
          IFSCCode: '2324', 
          AccountName: 'Sauban',
          RequestState: 1,
          RequestDateTime: new Date(),
          RequestCompletionDateTime: new Date()
        },
        {
          Id: 2,
          RequestedByUserId: '13455',
          BankAccountNumber: '345345',
          RequestedUserFullName: 'Sauban',
          BankAccountId: 22,
          BankName: 'ICICI',
          IFSCCode: '2324', 
          AccountName: 'Sauban',
          PhoneNumber: '6666666666',
          Amount: 200,
          RequestState: 2,
          RequestDateTime: new Date(),
          RequestCompletionDateTime: new Date()
        }
      ];
    });
  }

  openModalDialog(requestItem: RedeemRequest) {
    this.redeemRequest = requestItem;
    this.formInstance.patchValue({
      ReqeustId: requestItem.Id,
      RequestStatus: <number>requestItem.RequestState,
    })
    this.modalDialog.show();
  }

  submitUpdatedStatus() {
    this.shouldShowSpinner = false;
    this.showFullSpinner();
    var editRequest = Object.assign({}, this.redeemRequest);
    editRequest.RequestState = <ReemRequestStatus>this.formInstance.get("RequestStatus")?.value;
    this.redeemRequestService.editRedeemRequest(editRequest).subscribe(() => {
      this.shouldShowSpinner = true;
      this.hideFullSpinner();
      this.hideSpinner();
    })
  }

}
