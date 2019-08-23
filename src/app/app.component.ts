import { Component } from '@angular/core';
import { SentencesService } from './sentences.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private sentencesService: SentencesService) {}

  title = 'sentences';
  sentences = this.sentencesService.get();
  current = this.getRandomInt();
  isAnswerVisible = false;
  languageQ = 'Rus';
  languageA = 'Eng';
  languages = ['Rus', 'Eng'];

  getRandomInt() {
    return Math.floor(Math.random() * (this.sentences.length + 1));
  }

  showAnswer() {
    this.isAnswerVisible = true;
  }

  nextRandom() {
    this.isAnswerVisible = false;
    this.current = this.getRandomInt();
  }

  onLanguageChange(value) {
    this.isAnswerVisible = false;
    this.languageA = this.languageQ;
    this.languageQ = value;
  }

}
