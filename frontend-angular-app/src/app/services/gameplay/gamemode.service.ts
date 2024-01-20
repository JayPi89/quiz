import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GamemodeService {

  questionModes: string[] = ['country','flags'];
  
  constructor() { }
}
