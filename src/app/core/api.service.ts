import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Portfolio } from "./../shared/models/portfolio";
import { Blog } from "./../shared/models/blog";
import { Videos } from "./../shared/models/videos";
import { Ferramentas } from "./../shared/models/ferramentas";
import { Aplicativos } from "./../shared/models/aplicativos";
import { Contato } from "./../shared/models/contato";

const url = "http://localhost:3000/";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  portfolio(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(url + "portfolio");
  }
  aplicativos(): Observable<Aplicativos[]> {
    return this.http.get<Aplicativos[]>(url + "aplicativos");
  }
  videos(): Observable<Videos[]> {
    return this.http.get<Videos[]>(url + "videos");
  }
  ferramentas(): Observable<Ferramentas[]> {
    return this.http.get<Ferramentas[]>(url + "ferramentas");
  }
  blog(): Observable<Blog[]> {
    return this.http.get<Blog[]>(url + "blog");
  }
  home(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(url + "home");
  }
  contato(formulario: Contato): Observable<Contato> {
    return this.http.post<Contato>(url + "contatos", formulario);
  }
}
