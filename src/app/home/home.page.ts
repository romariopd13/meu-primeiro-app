import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  produtos: any[] = []
  numero: number = 0
  constructor(private produtosService: ProdutoService) { }
  somar = () => this.numero++

  mostrarProdutos() {
    this.produtosService.listarProdutos().subscribe(res => {
      console.log(res)
      this.produtos = res
    }, erro => {
      console.log(erro)
    })
  }
  ionViewWillEnter() {
    this.mostrarProdutos()
  }
  deletarProduto(id) {
    this.produtosService.apagarProduto(id).subscribe(res => {
      this.mostrarProdutos()
    })
  }

}
