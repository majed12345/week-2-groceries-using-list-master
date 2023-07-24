import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  title = "Grocery";
  items =[
    {
      name: "Milk",
      quantity:2
    },

    {
      name: "Bread",
      quantity:4
    },

    {
      name: "Egg",
      quantity:8
    },

    {
      name: "Rusk",
      quantity:1
    },
]

  constructor(public navCtrl: NavController, public toastCtrl:ToastController) {

  }
  removeItem(item){
    console.log("Removing Item -" ,item);
    const toast =this.toastCtrl.create({
    message: 'Removing Item - '+ item.name + "...",
    duration:3000
  });
  toast.present();
  }
}
