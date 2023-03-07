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
  
  create(user: Users) {
    return this.firebase.collection('Admin').add(user);
  }

  createServico(servico: Servicos) {
    return this.firebase.collection('Servicos').add(servico);
  }


  getTasks() {
    return this.firebase.collection('Admin').snapshotChanges();
  }

  getServico() {
    return this.firebase.collection('Servicos').snapshotChanges();
  }

  getTask(id) {
    return this.firebase.collection('Servicos').doc(String(id)).valueChanges();
  }

  updateServico(id, servico : Servicos) {
    this.firebase.collection('Servicos').doc(id).update(servico).then(() => {
      this.route.navigate(['/tela-cabelo']);
    }).catch((err) => console.log(err))
  }

  deleteServico(id: string) {
    this.firebase.doc('Servicos/' + id).delete();
  }
}
