import { Component, OnInit } from '@angular/core';
//for reactiveForms
import { FormGroup, FormControl, Validators } from '@angular/forms';
//FormGroup fa riferimento a tutti i campi del form che devono essere validati o submittati.
//FormControl gestisce il singolo field.

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  //async validation sono usati quando la validazione avviene ad esempio con una request.
  cardForm = new FormGroup( 
    { 
      name: new FormControl(/*Default value*/ '' , [Validators.required, Validators.minLength(3)]),
      cardNumber: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]),
      expiration: new FormControl('', [Validators.required, Validators.pattern(/^(0[0-9]|1[0-2])\/\d{2}$/)]),
      securityCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  });

  constructor() { 
    console.log(this.cardForm.controls.name);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('form is submitted');
  }

}
