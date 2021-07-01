import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments : string[] = ["Mars soil sample", "Plant growth in habitat", "Human bone density"];

  constructor() { }

  ngOnInit() {
  }

  addExperiment(item : string) {
    this.experiments.push(item);
  }

  removeExperiment(item: string) {
    let index = this.experiments.indexOf(item);
    this.experiments.splice(index, 1);
  }
}
