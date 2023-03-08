import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Servicos } from '../models/servicos';
import { Users } from '../models/users';




@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firebase: AngularFirestore, private route: Router) { }
  
  // Cria a tabela Admin no firebase
  create(user: Users) {
    return this.firebase.collection('Admin').add(user);
  }

  // Cria a tabela Serviços no firebase
  createServico(servico: Servicos) {
    return this.firebase.collection('Servicos').add(servico);
  }

//  Lista todos os dados que estão na tabela Admin
  getAdmin() {
    return this.firebase.collection('Admin').snapshotChanges();
  }

  //  Lista todos os dados que estão na tabela Serviços
  getServico() {
    return this.firebase.collection('Servicos').snapshotChanges();
  }

  // Lista apenas um dado atraves do id da tabela Serviços
  getIdServicos(id) {
    return this.firebase.collection('Servicos').doc(String(id)).valueChanges();
  }

  getIdAdmin(id) {
    return this.firebase.collection('Admin').doc(String(id)).valueChanges();
  }

  updateServico(id, servico : Servicos) {
    this.firebase.collection('Servicos').doc(id).update(servico).then(() => {
      this.route.navigate(['/tela-cabelo']);
    }).catch((err) => console.log(err))
  }

  updateAdmin(id, admin : Users) {
    this.firebase.collection('Admin').doc(id).update(admin).then(() => {}).catch((err) => console.log(err))
  }

  deleteServico(id: string) {
    this.firebase.doc('Servicos/' + id).delete();
  }

  deleteAdmin(id: string) {
    this.firebase.doc('Admin/' + id).delete();
  }
}
