import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  FormControl,
  Validators,
} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Servicos } from 'src/app/models/servicos';
import { ServicesService } from 'src/app/service/service.service';

@Component({
  selector: 'app-tela-cabelo',
  templateUrl: './tela-cabelo.page.html',
  styleUrls: ['./tela-cabelo.page.scss'],
})
export class TelaCabeloPage implements OnInit {
  public consultas : Observable<Servicos[]>
  isModalOpen = false;
  public servicos : Servicos
  public editMode = false
  mensagens: string[] = [];
  
  constructor(
    private enviardados: AlertController, 
    private alerta: AlertController,
    private service:ServicesService,
    private activatedRoute: ActivatedRoute
    ) {
      this.consultas = this.service.getServicos()
    }

    setOpen(isOpen: boolean) {
      this.isModalOpen = isOpen;
    }

    pegarMensagem(msg) {
     this.mensagens.unshift(msg)
    }

    handleChange(index: Servicos){
      this.pegarMensagem(index.id);
      
      console.log(index.id)
    
      switch (this.editMode){
        case false:
          this.editMode = true;
          break;
      }
    }    

    

  async enviarDados() {
    const alert = await this.enviardados.create({
      header: 'Criar um novo serviço',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome',
        },
        {
          name: 'descricao',
          placeholder: 'Descrição',
        },
        {
          name: 'valor',
          type: 'number',
          placeholder: 'Valor',
          min: 1,
        },
      ],

      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Criar',
          cssClass: 'alert-button-confirm',

          handler: async(dados) =>{
            const nome = dados.nome;
            const descricao = dados.descricao;
            const valor = dados.valor;

            if(dados.nome.trim() === '' || dados.descricao.trim() === '' || dados.valor.trim() === ''){
              const alerterror = await this.alerta.create({
                header: 'Algo deu Errado =(',
                message: 'Por Favor preencha todos os campos',
                cssClass: 'custom-alert',
                
                buttons: [
                  {
                    text: 'Voltar',
                    cssClass: 'alert-button-cancel2',
                  },
                ],
              });
              
              alerterror.present();
              return false;
              
            }
            else{
              this.service.AddServico(dados) 
              const alertsucess = await this.alerta.create({
                header: 'Servico Criado =)',
                message: 'Seu serviço foi criado com sucesso!',
                cssClass: 'custom-alert',
                
                buttons: [
                  {
                    text: 'Voltar',
                    cssClass: 'alert-button-sucess',
                  },
                ],
              });
              
              alertsucess.present();
              return true;
            }
          }
        },
      ],
    });

    await alert.present();
  }

  Update(dados : any){
    let updateServicos : Servicos = {id: this.servicos.id, ...dados };
    this.service.updateServico(updateServicos)
  }

  ngOnInit() :void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getIdServicos(id!).subscribe({
      next: (data : Servicos) =>{
        if(!data){
          console.log('sus error')
        }
        else{
          this.servicos = data
        }
      }
    })

   
  }

}
