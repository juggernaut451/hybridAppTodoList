import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import { AddItemPage} from '../addItem/addItem';
import {Data} from './../../providers/data/data'
import {ItemDetailPage} from "../ItemDetail/itemDetail";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private items = [];
  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private dataService: Data) {
    this.items = [
      {title: 'hi1', description: 'test1'},
      {title: 'hi2', description: 'test2'},
      {title: 'hi3', description: 'test3'},
      {title: 'hi4', description: 'test4'},
      {title: 'hi5', description: 'test5'},
    ];
    this.dataService.getData().then((todos) =>{
      if(todos){
        this.items = JSON.parse(todos);
      }
    });
  }
  addItem(){
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
      if (item){
        this.saveItem(item);
      }
    });
    addModal.present();
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items)
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
}
