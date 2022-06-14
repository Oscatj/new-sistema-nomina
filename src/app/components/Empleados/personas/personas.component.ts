import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit{
  personaForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.personaForm = this.fb.group({
      
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
