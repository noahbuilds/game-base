import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       req =req.clone({
        setHeaders: {
            'X-RapidAPI-Key': '8206499151msh555d5fa00fe238cp121873jsn66a81dcdf2f1',
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
        },
        setParams: {
            key: environment.KEY
        }
       });
       return next.handle(req)
    }
}