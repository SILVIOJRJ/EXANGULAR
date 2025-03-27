import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  standalone: false,
  styleUrls: ['./listagem.component.css'] // REMOVA standalone: true se existir
})
export class ListagemComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'categoria'];
  dataSource: any[] = [];

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    const clientesStr = localStorage.getItem('clientes');
    this.dataSource = clientesStr ? JSON.parse(clientesStr) : [];
  }
}