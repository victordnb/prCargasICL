import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villa-name-and-type',
  templateUrl: './villa-name-and-type.component.html',
  styleUrls: ['./villa-name-and-type.component.css']
})
export class VillaNameAndTypeComponent implements OnInit {

  name : string = "";
  type : string = "";

  constructor() { }

  ngOnInit(): void {
    this.name = "Name of Villa";
    this.type = "unique family";
    
    console.log("Name: " + this.name);
    console.log("Type: " + this.type);
  }


}
