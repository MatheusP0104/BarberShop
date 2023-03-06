import { Injectable } from '@angular/core';
import { collection, collectionData, doc, docSnapshots, Firestore, setDoc,  deleteDoc} from '@angular/fire/firestore';
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

  getIdServicos(id : string): Observable<Servicos>{
    const document = doc(this.firestore, `Servicos/${id}`);
    return docSnapshots(document).pipe(
      map(doc => {
        const id = doc.id;
        const data = doc.data();
        return {id, ...data} as Servicos
      })
    )
  }

  updateServico(servicos : Servicos): Promise<void> {
    const document = doc(this.firestore, 'Servicos', servicos?.id);
    const {id, ...data} = servicos
    return setDoc(document, data)
  }

  delete(id: string): Promise<void> {
    const document = doc(this.firestore, 'Servicos', id)
    console.log(document);
    return deleteDoc(document)
  }

  }

