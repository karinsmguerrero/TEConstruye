import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  readonly routeURL = "https://localhost:44300/api"

  constructor() { }
}
