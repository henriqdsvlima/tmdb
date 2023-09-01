import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders
} from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private apiUrl = environment.apiUrl
  private apiKey = environment.apiKey;
  private readToken = environment.readToken;

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Clone a solicitação e define os novos cabeçalhos.
    if (request.url.startsWith(this.apiUrl)) {
      const clonedRequest = request.clone({
        params: request.params.set('api_key', this.apiKey),
        headers: request.headers.set('Authorization', `Bearer ${this.readToken}`)
      });

      return next.handle(clonedRequest);
    }

    return next.handle(request);
  }
}
