import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  // inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', inCrew : false},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', inCrew : false},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', inCrew : false},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', inCrew : false},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', inCrew : false},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', inCrew : false},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', inCrew : false}
  ];

  constructor() { }

  ngOnInit() { }

  addCrewMember(candidate : Candidate) {
    if (this.crew.includes(candidate)) {
      let index = this.crew.indexOf(candidate);
      this.crew.splice(index, 1);
    } else if (this.crew.length < 3) {
      this.crew.push(candidate);
    }
  }
}
