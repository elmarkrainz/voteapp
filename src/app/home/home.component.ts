import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clicksGood: number = 0;
  clicksMed: number = 0;
  clicksSad: number =0;
  votes: number=0;


  constructor() {
  }

  ngOnInit() {
      this.loadLocal();
  }


  countClick() {
    this.clicksGood += 1;
    this.votes++;
    localStorage.setItem("votes", String(this.votes));
    localStorage.setItem("good", String(this.clicksGood));
  }

  countClick_med()  {
    this.clicksMed+=1;
    this.votes++;
    localStorage.setItem("votes", String(this.votes));
    localStorage.setItem("med", String(this.clicksMed));
  }

  countClick_sad(){
    this.clicksSad+=1;
    this.votes++;
    localStorage.setItem("votes", String(this.votes));
    localStorage.setItem("sad", String(this.clicksSad));

  }

    loadLocal(){

        if(!isNaN(parseInt(localStorage.getItem("votes")))) {
          this.clicksGood= parseInt(localStorage.getItem("good"));
          this.clicksMed= parseInt(localStorage.getItem("med"));
          this.clicksSad= parseInt(localStorage.getItem("sad"));

          this.votes= parseInt(localStorage.getItem("votes"));


        } else{
          this.clicksSad= 0;
          this.clicksGood= 0;
          this.clicksMed= 0;
          this.votes= 0;
        }
    }


  clearCounter(){

    localStorage.clear();
    this.clicksSad= 0;
    this.clicksGood= 0;
    this.clicksMed=0;
    this.votes=0;
  }

  loadCounter(){
    this.loadLocal();
  }

  // visibility settings
  isShown: boolean = false ; // hidden by default

  toggleShow() {

  /*  prompt({
        "title": "Show Settings",
        "message": "Password für Settings",
        "input": true,
        "label": "Password",
        "value": ""
        }).then(function(result){ console.log(result);

            if (result === "vote"){
              this.isShown = ! this.isShown;
            }

        });
        */


      this.isShown = ! this.isShown;

}


}
