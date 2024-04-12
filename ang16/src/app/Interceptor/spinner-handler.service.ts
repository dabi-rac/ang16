import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Subject } from "rxjs";

@Injectable()
export class SpinnerHandlerService {
    constructor (private spinner: NgxSpinnerService) { }

    isLoading = new Subject<boolean>();
    show() {
        this.isLoading.next(true);
        this.spinner.show();
    }
    hide() {
        this.isLoading.next(false);
        this.spinner.hide();
    }
}