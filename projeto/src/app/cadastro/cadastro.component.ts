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
      // Redireciona para listagem e passa os dados pela rota
      this.router.navigate(['/listagem'], {
        queryParams: { nome: this.nome, categoria: this.categoria }
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listagem']);
  }
}
