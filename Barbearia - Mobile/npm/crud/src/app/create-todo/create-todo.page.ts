import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.page.html',
  styleUrls: ['./create-todo.page.scss'],
})
export class CreateTodoPage implements OnInit {
  userForm : FormGroup
  public editMode = false

  constructor(
    private service: CrudService,
    public formBuilder: FormBuilder,
    private route : Router,
    private alertController: AlertController
  ) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: 'Algo deu errado =(',
      message: 'Por Favor, preencha todos os campos corretamente.',
      buttons: ['Voltar'],
    });

    await alert.present();
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      nome: ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(50),Validators.pattern('[a-zA-Z]*')])],
        email: ['',Validators.compose([Validators.required,Validators.email])],
        telefone: ['',Validators.compose([Validators.required, Validators.minLength(14)])],
        senha: ['',Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])]
    })
  }

  onSubmit() {
    switch (this.editMode){
      case false:
      this.editMode = true
      break
    
      case true:
        this.editMode = false
        break
      }
    if (!this.userForm.valid) {
      this.presentAlert()
    } else {
      this.service.create(this.userForm.value).then(() => {
        this.userForm.reset();
        this.route.navigate(['/list-todo'])
      }).catch((err) => console.log(err))
    }
  }

}
