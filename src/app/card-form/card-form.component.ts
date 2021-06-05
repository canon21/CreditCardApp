import { Component, OnInit } from '@angular/core';
//for reactiveForms
import { FormGroup, FormControl } from '@angular/forms';
//FormGroup fa riferimento a tutti i campi del form che devono essere validati o submittati.
//FormControl gestisce il singolo field.

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl(/*Default value*/ '')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
