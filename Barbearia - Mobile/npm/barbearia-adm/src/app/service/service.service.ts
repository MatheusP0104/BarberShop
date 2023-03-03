import { Injectable } from '@angular/core';
import { collection, collectionData, doc, docSnapshots, Firestore, setDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/cadastro';
import { map } from 'rxjs/operators'
import { Servicos } from '../models/servicos';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 
  constructor(
    private firestore: Firestore) {}


  // Create
  userSignUp(data: User){
    const document = doc (collection(this.firestore, 'Admin'));
    return setDoc(document, data);    
  }

  AddServico(data: Servicos){
    const document = doc (collection(this.firestore, 'Servicos'));
    return setDoc(document, data);    
  }

  // Read
  getContacts(): Observable<User[]> {
    const contactsCollection = collection(this.firestore, 'Admin');
    return collectionData(contactsCollection, {idField: 'id'}).pipe(
      map(contacts => contacts as User[])
    );
  }

  getServicos(): Observable<Servicos[]> {
    const contactsCollection = collection(this.firestore, 'Servicos');
    return collectionData(contactsCollection, {idField: 'id'}).pipe(
      map(contacts => contacts as Servicos[])
    );
  }

  getIdServicos(id : string){
    const document = doc(this.firestore, `data/${id}`);
    return docSnapshots(document).pipe(
      map((doc) => {
        const id = doc.id;
        const data = doc.data();
        return {id, ...data} as Servicos
      })
    )
  }

  updateServico(servicos : Servicos){
    const document = doc(this.firestore, 'Servicos', servicos?.id);
    const {id, ...data} = servicos
    return setDoc(document, data)


  }

  }

