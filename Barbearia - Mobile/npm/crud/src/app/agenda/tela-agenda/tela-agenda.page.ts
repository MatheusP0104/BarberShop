import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-agenda',
  templateUrl: './tela-agenda.page.html',
  styleUrls: ['./tela-agenda.page.scss'],
})
export class TelaAgendaPage implements OnInit {
  customPopoverOptions = {
    header: 'escolha o serviço',
    subHeader: 'agendamentos rapidos',
    message: '',
  };

  public editMode = 4

  constructor() { }

  edit(){
    switch (this.editMode){
      // se tiver na tela 1(Calendario) vá para tela 2(onde escolhe os cortes)
      case 1:
        this.editMode = 2;
        break;

      // se tiver na tela 2(escolher os cortes) vá para a tela 5(pagamento concluido)
      // case 2:
      //   this.editMode = 5;
      //   break;

      // se tiver na tela 3(Pagamento Pix) vá para a tela 5(pagamento concluido)
      case 3:
        this.editMode = 5;
        break;

      // se tiver na tela 4(Pagamento no Local) vá para a tela 5(pagamento concluido)
      case 4:
        this.editMode = 5;
        break;
      
    }
  }

  // vá para tela 3(pix)
  pix(){
    this.editMode = 3
  }

  // vá para tela 4(pagamento no local)
  local(){
    this.editMode = 4
  }

  tela(){
    this.editMode = 1
  }

  

  ngOnInit() {
  }

}
