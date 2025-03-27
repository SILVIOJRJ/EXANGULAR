import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  standalone: false,
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome: string = '';
  categoria: string = '';

  constructor(private router: Router) { }

  salvar() {
    if (this.nome && this.categoria) {
      const newItem = {
        nome: this.nome,
        categoria: this.categoria
      };

      const storedItems = localStorage.getItem('itens');
      let itens = storedItems ? JSON.parse(storedItems) : [];

      itens.push(newItem);

      localStorage.setItem('itens', JSON.stringify(itens));

      this.router.navigate(['/listagem']);
    }
  }

  cancelar() {
    this.router.navigate(['/listagem']);
  }
}