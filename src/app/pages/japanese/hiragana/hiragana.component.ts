import { Component } from '@angular/core';

@Component({
  selector: 'app-hiragana',
  templateUrl: './hiragana.component.html',
  styleUrls: ['./hiragana.component.css']
})
export class HiraganaComponent {

  private hiragana = [
    {id: 1, symbol: "あ", romanji: "a"},
    {id: 2, symbol: "い", romanji: "i"},
    {id: 3, symbol: "う", romanji: "u"},
    {id: 4, symbol: "え", romanji: "e"},
    {id: 5, symbol: "お", romanji: "o"},
    {id: 6, symbol: "か", romanji: "ka"},
    {id: 7, symbol: "き", romanji: "ki"},
    {id: 8, symbol: "く", romanji: "ku"},
    {id: 9, symbol: "け", romanji: "ke"},
    {id: 10, symbol: "こ", romanji: "ko"},
    {id: 11, symbol: "さ", romanji: "sa"},
    {id: 12, symbol: "し", romanji: "shi"},
    {id: 13, symbol: "す", romanji: "su"},
    {id: 14, symbol: "せ", romanji: "se"},
    {id: 15, symbol: "そ", romanji: "so"},
    {id: 16, symbol: "た", romanji: "ta"},
    {id: 17, symbol: "ち", romanji: "chi"},
    {id: 18, symbol: "つ", romanji: "tsu"},
    {id: 19, symbol: "て", romanji: "te"},
    {id: 20, symbol: "と", romanji: "to"},
    {id: 21, symbol: "な", romanji: "na"},
    {id: 22, symbol: "に", romanji: "ni"},
    {id: 23, symbol: "ぬ", romanji: "nu"},
    {id: 24, symbol: "ね", romanji: "ne"},
    {id: 25, symbol: "の", romanji: "no"},
    {id: 26, symbol: "は", romanji: "ha"},
    {id: 27, symbol: "ひ", romanji: "hi"},
    {id: 28, symbol: "ふ", romanji: "fu"},
    {id: 29, symbol: "へ", romanji: "he"},
    {id: 30, symbol: "ほ", romanji: "ho"},
    {id: 31, symbol: "ま", romanji: "ma"},
    {id: 32, symbol: "み", romanji: "mi"},
    {id: 33, symbol: "む", romanji: "mu"},
    {id: 34, symbol: "め", romanji: "me"},
    {id: 35, symbol: "も", romanji: "mo"},
    {id: 36, symbol: "や", romanji: "ya"},
    {id: 37, symbol: "ゆ", romanji: "yu"},
    {id: 38, symbol: "よ", romanji: "yo"},
    {id: 39, symbol: "ら", romanji: "ra"},
    {id: 40, symbol: "り", romanji: "ri"},
    {id: 41, symbol: "る", romanji: "ru"},
    {id: 42, symbol: "れ", romanji: "re"},
    {id: 43, symbol: "ろ", romanji: "ro"},
    {id: 44, symbol: "わ", romanji: "wa"},
    {id: 45, symbol: "を", romanji: "wo"},
    {id: 46, symbol: "ん", romanji: "n"},
  ];

  selectedHiragana;
  inputRomanji: string = "";
  result: string = "";

  constructor() { 
    this.selectedHiragana = this.getRandomHiragana();
  }

  getRandomHiragana() {
    return this.hiragana[Math.floor(Math.random() * this.hiragana.length)].symbol;
  }

  checkHiragana() {
    const match =  this.hiragana.find(hiragana => hiragana.symbol == this.selectedHiragana);
    if (match?.romanji == this.inputRomanji) {
      this.result = "Correct!";
    } else {
      this.result = "Incorrect! The correct answer is: " + match?.romanji ;
    }
    this.inputRomanji = "";
    this.selectedHiragana = this.getRandomHiragana();
  }
}
