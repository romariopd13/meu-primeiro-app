import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produto } from '../produto';
import { url_api } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${url_api}/produto`)
  }
  salvarNovoProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${url_api}/produto`, produto)
  }
  apagarProduto(id): Observable<any> {
    return this.http.delete<any>(`${url_api}/produto/${id}`)
  }
  atualizarProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${url_api}/produto/${produto.id}`, produto)
  }
  pegaProdutoPorId(id): Observable<any> {
    return this.http.get<any>(`${url_api}/produto/${id}`)
  }
}
