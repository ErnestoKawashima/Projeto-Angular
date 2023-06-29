import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Ernesto Júnior";
  dataNascimento = "1996-03-05";
  urlImagem = "/assets/teste.jpg";

  mostrarDataNascimento() {
    alert(`A data de nascimento do Ernesto é: ${this.dataNascimento}`);
  }
}
