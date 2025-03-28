import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  standalone: false,
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', Validators.required],
      categoria: ['', Validators.required],
      newsletter: [false],
      tipo: ['', Validators.required]
    });
  }

  salvar() {
    if (this.form.valid) {
      const novoCliente = this.form.value;
      const clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
      clientes.push(novoCliente);
      localStorage.setItem('clientes', JSON.stringify(clientes));
      
      this.snackBar.open('Cliente cadastrado com sucesso!', 'Fechar', {
        duration: 3000
      });
      this.router.navigate(['/listagem']);
    }
  }

  cancelar() {
    this.router.navigate(['/listagem']);
  }
}