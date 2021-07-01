import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = ["Drones", "Food containers", "Oxygen tanks", "Habitat dome"];
  equipmentBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  addEquipment(item : string) {
    this.equipment.push(item);
  }

  removeEquipment(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

}
