import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Users } from 'src/app/models/users';
import { CrudService } from 'src/app/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tela-perfil',
  templateUrl: './tela-perfil.page.html',
  styleUrls: ['./tela-perfil.page.scss'],
})
export class TelaPerfilPage implements OnInit {
  id : any
  editForm: FormGroup
  Consultas : Users[];
  icone: string = 'create-outline'
  tipo : string
  public editMode = false

  constructor(
    private service: CrudService,
    public formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private route: Router,) { 
    
    this.service.getAdmin().subscribe((res) => {
      this.Consultas = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Users)
        }
      })
    })

    this.id = this.activateRoute.snapshot.paramMap.get('id')
    this.service.getIdAdmin(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        nome: [data['nome']],
        email: [data['email']],
        telefone: [data['telefone']],
        senha: [data['senha']],
      })
    })
  }

  todoList() {
    this.service.getAdmin().subscribe((data) => {
      console.log(data)
    })
  }

   // Delete
   remove(id) {
      this.service.deleteAdmin(id)
  }

  edit(){
    switch (this.editMode){
      case false:
        if(this.icone === 'create-outline'){
        this.editMode = true;
        this.icone = 'checkbox-outline'
        break;
        }
      case true:
        if(this.icone === 'checkbox-outline')
          this.editMode = false;
        this.tipo = 'submit'
        this.icone = 'create-outline'
        break;
    }
  }

  ngOnInit() {
     this.editForm = this.formBuilder.group({
      nome: [''],
      email: [''],
      telefone: [''],
      senha: ['']
    })
  }

  onSubmit() {
    this.service.updateAdmin(this.id, this.editForm.value)
  }

}
