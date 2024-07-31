import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/models/Section';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'api-sidebarlist',
  templateUrl: './sidebarlist.component.html',
  styleUrls: ['./sidebarlist.component.scss']
})
export class SidebarlistComponent implements OnInit {

  data: Section[] = [];
  panelOpenState = false;

  constructor(private functionsService: FunctionsService) {
  }
  
  ngOnInit(): void {
    this.functionsService.getData().subscribe(data => {
      this.data = data
      console.log(data);
    });

  }

}
