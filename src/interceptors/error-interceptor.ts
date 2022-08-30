import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlertController } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import { StorageService } from "../services/storage.service";

@Injectable()
export class ErrorInteceptor implements HttpInterceptor {

  constructor(
    public storage: StorageService,
    public alertCtrl: AlertController) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .catch((error, caught) => {
        let errorObj = error;

        if (errorObj.error) {
          errorObj = errorObj.error;
        }

        if (!errorObj.status) {
          errorObj = JSON.parse(errorObj);
        }
        console.log("Erro detectado pelo interceptor:");
        console.log(errorObj);

        switch (errorObj.status) {
          case 401:
            this.handle401();
            break;
          case 403:
            this.handle403();
            break;
          default:
            this.handleDefaultError(errorObj);
            break;
        }
        return Observable.throw(errorObj);
      }) as any;
  }

  handle401() {
    let alert = this.alertCtrl.create({
      title: 'Erro 401: Falha de autenticação',
      message: 'Email ou senha incorrentos',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
        }
      ],
    });
    alert.present();
  }

  handle403() {
    this.storage.setLocalUser(null);
  }

  handleDefaultError(errorObj) {
    let alert = this.alertCtrl.create({
      title: 'Erro ' + errorObj.status + ': ' + errorObj.error,
      message: errorObj.message,
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
        }
      ],
    });
    alert.present();
  }

}

export const ErrorInteceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInteceptor,
  multi: true,
};