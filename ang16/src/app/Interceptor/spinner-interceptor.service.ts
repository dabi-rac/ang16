import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpResponse, HttpHandler } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from "rxjs";
import { finalize} from "rxjs/operators";
import { SpinnerHandlerService } from './spinner-handler.service';


@Injectable()
export class SpinnerInterceptorService implements HttpInterceptor {
  constructor(
    public spinnerService: SpinnerHandlerService,
    private spinner: NgxSpinnerService
  ) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    return next.handle(req).pipe(finalize(() => this.spinnerService.hide()));
  }
}
// @Injectable({
//     providedIn: 'root'
// })
// export class SpinnerInterceptor implements HttpInterceptor {
//     private renderer: Renderer2;
//     constructor(private spinner: NgxSpinnerService, private rendererFactory: RendererFactory2) {
//         this.renderer = rendererFactory.createRenderer(null, null);
//     }
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         const start = performance.now();
//         this.showLoader();
//         // Add authentication logic here if needed
//         // For example, you can add an authorization header to the request

//         // Clone the request and add the authorization header
//         const authReq = req.clone({
//             setHeaders: {
//                 Authorization: 'Bearer your_token_here'
//             }
//         });

//         return next.handle(authReq).pipe(tap((event: HttpEvent<any>) => {
//             if (event instanceof HttpResponse) {
//                 this.onEnd();
//             }
//         },
//         (err: any) => {
//             this.onEnd();
//         }));
//     }
//     private onEnd(): void {
//         this.hideLoader();
//     }
//     private showLoader(): void {
//         this.spinner.show();
//     }
//     private hideLoader(): void {
//         this.spinner.hide();
//     }
// }
