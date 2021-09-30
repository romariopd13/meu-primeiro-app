import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Produto } from '../produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
  produto: Produto = {}
  id: any
  constructor(
    private produtoService: ProdutoService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.produtoService.pegaProdutoPorId(this.id).subscribe(res => {
      this.produto = res
    })
    console.log(this.id)
  }
  enviarProduto() {
    return this.id ? this.editarProduto() : this.salvarProduto();
  }
  salvarProduto() {
    this.produtoService.salvarNovoProduto(this.produto).subscribe(res => {
      console.log('Salvou')
      return this.navCtrl.navigateRoot('/home')
    }, erro => {
      console.log(erro);

    })
  }
  editarProduto() {
    this.produtoService.atualizarProduto(this.produto).subscribe(res => {
      return this.navCtrl.navigateRoot('/home')
    })
  }
  back() {
    return this.navCtrl.navigateRoot('/home')
  }
}
