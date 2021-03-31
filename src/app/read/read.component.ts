import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { IntegrateService } from '../integrate.service';
import { Data } from '../data';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  blog: Data[] = [];
  blogdata: any;
  constructor(private httpClient: HttpClient, private service: IntegrateService) { }

   ngOnInit() {
    this.httpClient.get<any>("http://localhost:3000/blog").subscribe((data)=>
      this.blogdata = data
    )}

    delete(id: number)
  {
    this.service.delete(id).subscribe(res => {
      this.blog = this.blog.filter(items => items.id !== id);
      console.log('Post Deleted Successfully!');
    })
  }

}
