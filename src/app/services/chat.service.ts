import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Chat } from '../interfaces/chat.interface';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public chats: Chat[] = [];
  private itemsCollection: AngularFirestoreCollection<Chat>;
  public usuario: any = {};

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      console.log('Estado del usuario: ', user);
      if (!user) {
        return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    });
  }

  login(proveedor: string) {
    if (proveedor === 'google') {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    } else {
      this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
    }
  }
  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Chat>('chats', (ref) => ref.orderBy('fecha', 'desc').limit(5));
    return this.itemsCollection.valueChanges().pipe(
      map((messages: Chat[]) => {
        console.log(messages);
        this.chats = messages.reverse();
        // opcional
        return this.chats;
        // this.chats = messages;
      }),
    );
  }

  agregarMensaje(texto: string) {
    // TODO: falta el uid
    let message: Chat = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid,
    };

    return this.itemsCollection.add(message);
  }
}
