import { Injectable } from '@angular/core';
import {sentences} from '../assets/data';

@Injectable({
  providedIn: 'root'
})
export class SentencesService {

  constructor() { }

  sentences = sentences;

  get() {
    return this.sentences;
  }

}
