import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.page.html',
  styleUrls: ['./tela-principal.page.scss'],
})
export class TelaPrincipalPage implements OnInit {
  Consultas : Users[];

  constructor(private service : CrudService) { }

  ngOnInit() {
    this.service.getAdmin().subscribe((res) =>{
      this.Consultas = res.map((t) =>{
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Users)
        }
      })
    })
  }

  todoList() {
    this.service.getAdmin().subscribe((data) => {
      console.log(data)
    })
  }

}
