import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncParam } from 'src/app/models/FuncParam';
import { Function } from 'src/app/models/Function';
import { Section } from 'src/app/models/Section';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'detail-section',
  templateUrl: './detail-section.component.html',
  styleUrls: ['./detail-section.component.scss']
})
export class DetailSectionComponent implements OnInit {

  element: any;
  data: Section[] = [];
  section = Section.empty();
  sectionUrl: string;
  sectionKeyUrl: string;
  sectionKeyNameUrl: string;

  constructor(
    private router : Router,
    private functionsService : FunctionsService
  ) { 
    const urlParams = this.router.url.split('/');
    this.sectionUrl = urlParams[3];
    this.sectionKeyUrl = urlParams[4];
    this.sectionKeyNameUrl = urlParams[5];
  }

  ngOnInit(): void {
    this.functionsService.getData().subscribe(data => {
      this.data = data;
      const result = data.find(section => section.name.toLowerCase() === this.sectionUrl.toLowerCase())
      if(result) this.section = result;
      else this.redirectToMain();
      console.log(this.section);
      if(this.sectionKeyUrl === 'function'){
        this.element = this.section.functions.find(element => element.name.toLowerCase() === this.sectionKeyNameUrl.toLowerCase());
      } else if(this.sectionKeyUrl === 'field'){
        this.element = this.section.fields.find(element => element.name.toLowerCase() === this.sectionKeyNameUrl.toLowerCase());
      }
      if(!this.element) this.redirectToMain();
    });
  }

  redirectToMain(){
    // this.router.navigate(['/api/gtnh']);
  }

  getElementParams() {
    return this.element.parameters.map((param: FuncParam) => param.name).join(', ');
  }

  copyToClipboard() {
    const functionName = this.element.name + '(' + this.getElementParams() + ')';
    const listener = (e: ClipboardEvent) => {
      e.clipboardData?.setData('text/plain', (functionName));
      e.preventDefault();
    };
    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }

}
