import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../integrate.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  form!: FormGroup;    
 
  constructor(private http: HttpClient, private service: IntegrateService, private route: ActivatedRoute, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      blog: new FormControl('', [Validators.required]),
    });

  }
  get f(){
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
    console.log(this.form.value["id"]);
    this.service.update(this.form.value["id"],this.form.value).subscribe(res => {
      console.log("Success");
    })
  }
}
