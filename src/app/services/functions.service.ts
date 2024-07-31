import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Section } from '../models/Section';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(private http: HttpClient) { }

  private jsonUrl = '/assets/data/sections.json';

  getData() : Observable<Section[]>{ 
    return this.http.get<Section[]>(this.jsonUrl);
  }

  getSectionByName(sectionName: string): Observable<Section | undefined>{
    return this.http.get<Section[]>(this.jsonUrl).pipe(
      map((sections: Section[]) => sections.find(section => section.name === sectionName))
    );
  }

}
