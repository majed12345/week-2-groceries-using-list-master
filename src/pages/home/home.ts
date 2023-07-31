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
  removeItem(item,index){
    console.log("Removing Item -" ,item,index);
    const toast =this.toastCtrl.create({
    message: 'Removing Item - '+ index+ "...",
    duration:3000
  });
  toast.present();

  this.items.splice(index,1);
  }

  editItem(item,index){
    console.log("Edit Item -" ,item,index);
    const toast =this.toastCtrl.create({
    message: 'Editing Item - '+ index+ "...",
    duration:3000
  });
  toast.present();

  }
}
