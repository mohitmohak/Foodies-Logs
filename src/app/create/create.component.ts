import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { IntegrateService } from '../integrate.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form! : FormGroup;
  constructor(private httpClient: HttpClient,
    private router: Router,
    private integrateService: IntegrateService
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('',[Validators.required]),
        title: new FormControl('',[Validators.required]),
        id: new FormControl('',[Validators.required]),
        date: new FormControl('',[Validators.required]),
        blog: new FormControl('',[Validators.required]),
      });
  }


  get f()
  {
  return this.form.controls;
  }

  submit()
  {
     console.log(this.form.value);  
    return this.integrateService.create(this.form.value).subscribe(res => {
       console.log("Post Successfully!");
     })
  }
}
