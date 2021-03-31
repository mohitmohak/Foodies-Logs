import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IntegrateService } from '../integrate.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form! : FormGroup;
  constructor(private httpClient: HttpClient,
    private router: Router,
    private integrateService: IntegrateService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl('',[Validators.required]),
      username: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required]),
        subject: new FormControl('',[Validators.required]),
        message: new FormControl('',[Validators.required]),
      });
  }

  get f()
  {
  return this.form.controls;
  }

  submit()
  {
     console.log(this.form.value);  
    return this.integrateService.create1(this.form.value).subscribe(res => {
       console.log("Contacted Successfully! Will contact you shortly");
     })
  }

}
