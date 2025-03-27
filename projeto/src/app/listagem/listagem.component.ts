import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  standalone: false,
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {
  itens: any[] = [
    { nome: 'Item 1', categoria: 'Categoria A' },
    { nome: 'Item 2', categoria: 'Categoria B' }
  ];

  constructor(private route: ActivatedRoute) {
    // Verifica se há novos dados passados pela rota e adiciona à lista
    this.route.queryParams.subscribe(params => {
      if (params['nome'] && params['categoria']) {
        this.itens.push({ nome: params['nome'], categoria: params['categoria'] });
      }
    });
  }
}
