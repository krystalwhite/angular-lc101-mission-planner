import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Equipment } from '../equipment';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: Equipment[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: Equipment[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   massRemaining : number = 2000;
   inactive : boolean = false;


   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(equip : Equipment) {
     if (this.cargoHold.length === this.maxItems) {
        this.inactive = true;
     }

     if (equip.mass > this.massRemaining) {
       this.inactive = true;
     } else {
       this.inactive = false;
     }
     this.cargoHold.push(equip);
     this.cargoMass += equip.mass;
     this.massRemaining = this.maximumAllowedMass - this.cargoMass;
     
    //  if (this.cargoMass <= this.maximumAllowedMass) {
    //   //  what makes it true or false? are we using this to bind the disabled attribute?
    //   // button color is goldenrod when active; for some reason, duct tape remains yellow after 10 items in cargoHold; buttons are not disabled ever ????
    //    return true;
    //  } else {
    //    return false;
    //  }
   }

  //  disableCargoButton() {
     
  //    }
  //   //  if item.mass >= massRemaining return true
  //  }
}
