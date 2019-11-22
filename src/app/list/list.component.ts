import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  clickCounter: number = 0;
  clicksMed: number = 0;
  clicksSad: number =0;

  constructor() { }

  ngOnInit() {

  }

  loadvotes(){
      if(!isNaN(parseInt(localStorage.getItem("sad")))) {
        this.clicksSad= parseInt(localStorage.getItem("sad"));
        this.clickCounter= parseInt(localStorage.getItem("good"));
        this.clicksMed= parseInt(localStorage.getItem("med"));


      }
    
  }


  clearCounter(){
    localStorage.clear();
  }

  loadCounter(){
  //  loadvotes();
  }
}
