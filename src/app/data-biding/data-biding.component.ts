import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl:   './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {
  
  url: string = 'http://loiane.com';
  urlImagem = 'https://i.picsum.photos/id/876/400/200.jpg?hmac=_TnjnXy7TckCGOY3tjJYpjR7e5bMEQER5MO_PV4TQzs';
  urlImagem2 = 'https://i.picsum.photos/id/197/400/200.jpg?hmac=ZuRUOuFMCPcLNi2MIcbwmqhOJn6Pq4b3FuFmgloDM50';
  cursoAngular : boolean = true;
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nomeDoCurso: string = 'Angular';
  valorInicial: number = 15;
  
  


  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão Clicado!');
  }

 onKeyUp(evento: KeyboardEvent){
    
    this.valorAtual = (<HTMLInputElement>evento.target).value;
    
  }



  salvarValor(valor: string){
    this.valorSalvo = valor;

  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any){
    console.log (evento.novoValor);
    }
  

  constructor() { }

  ngOnInit(): void {
  }

}
