import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage, SqlStorage} from 'ionic-angular'
/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  private storage;
  private data = [];
  constructor() {
    this.storage = new Storage(SqlStorage, {name: 'todos12'});
    }

  getData(){
    return this.storage.get('todos12');
  }

  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('todos12', newData);
  }
}

