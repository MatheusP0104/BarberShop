import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicos } from '../models/servicos';
import { CrudService } from '../services/crud.service';




@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.page.html',
  styleUrls: ['./update-todo.page.scss'],
})
export class UpdateTodoPage implements OnInit {
  Consultas : Servicos[];
  editForm: FormGroup
  id: any

  constructor(
    private service: CrudService,
    private activateRoute: ActivatedRoute,
    private route: Router,
    public formBuilder : FormBuilder
  ) { 
    this.id = this.activateRoute.snapshot.paramMap.get('id')
    this.service.getIdServicos(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        nome: [data['nome']],
        descricao: [data['descricao']],
        valor: [data['valor']]
      })
    })
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      nome: [''],
      descricao: [''],
      valor: ['']
    })
  }

  onSubmit() {
    this.service.updateServico(this.id, this.editForm.value)
  }

  remove(id) {
      this.service.deleteServico(id)
  }

}
