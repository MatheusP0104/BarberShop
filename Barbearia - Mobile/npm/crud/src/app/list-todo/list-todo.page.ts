import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

export class TODO{
  id: string;
  title: string;
  descricao: string;
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.page.html',
  styleUrls: ['./list-todo.page.scss'],
})
export class ListTodoPage implements OnInit {
  Tasks: TODO[];

  constructor(private service : CrudService) { }

  // Lista na tela
  ngOnInit() {
    this.service.getAdmin().subscribe((res) => {
      this.Tasks = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as TODO)
        }
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
    console.log(id)
    if (window.confirm('Certeza?')) {
      this.service.deleteServico(id)
    }
  }

}
