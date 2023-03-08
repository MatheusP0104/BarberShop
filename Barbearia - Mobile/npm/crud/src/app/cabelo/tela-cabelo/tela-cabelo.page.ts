import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute,Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Servicos } from 'src/app/models/servicos';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-tela-cabelo',
  templateUrl: './tela-cabelo.page.html',
  styleUrls: ['./tela-cabelo.page.scss'],
})
export class TelaCabeloPage implements OnInit {
  Consultas : Servicos[];
  editForm : FormGroup;
  id : any;
  
  constructor(
    private service : CrudService,
    private activateRouter : ActivatedRoute,
    private router : Router,
    private alerta: AlertController,
    private enviardados: AlertController,
    public formBuilder : FormBuilder
  ) { 
    this.id = this.activateRouter.snapshot.paramMap.get('id')
    this.service.getIdServicos(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        nome: [data['nome']],
        email: [data['email']],
        telefone: [data['telefone']],
        senha: [data['senha']],
      })
    })
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      nome: [''],
      email: [''],
      telefone: [''],
      senha: [''],
    });

    this.service.getServico().subscribe((res) => {
      this.Consultas = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Servicos)
        }
      })
    })
  }

  todoList() {
    this.service.getServico().subscribe((data) => {
      console.log(data)
    })
  }

  onSubmit() {
    this.service.updateServico(this.id, this.editForm.value)
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
              this.service.createServico(dados) 
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

}
