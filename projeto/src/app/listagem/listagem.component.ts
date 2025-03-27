import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  standalone: false,
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  itens: any[] = [];

  ngOnInit(): void {
    const storedItems = localStorage.getItem('itens');
    if (storedItems) {
      this.itens = JSON.parse(storedItems);
    }
  }
}