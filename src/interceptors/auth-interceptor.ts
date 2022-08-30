import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { StorageService } from "../services/storage.service";

@Injectable()
export class AuthInteceptor implements HttpInterceptor {

  constructor(public storage: StorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let localUser = this.storage.getLocalUser();

    if (localUser) {
      const authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + localUser.token) });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }

}

export const AuthInteceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInteceptor,
  multi: true,
};