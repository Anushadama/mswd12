import { Component } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currencyconverter';
  dol;
  rup;
  eur;
  jpy;
  gbp;

  calcrup(){
     this.dol = this.rup*0.14;
     this.jpy = this.rup*1.40;
     this.gbp = this.rup*0.010;
     this.eur = this.rup*0.011;
  }

  calcdol(){
    this.rup = this.dol*73.88;
    this.jpy = this.dol*103.68;
    this.gbp = this.dol*0.76;
    this.eur = this.dol*0.85;
  }
  calcjpy(){
    this.rup = this.jpy*0.71;
    this.dol = this.jpy*0.0096;
    this.eur = this.jpy*0.0082;
    this.gbp = this.jpy*0.0074;
  }
  calcgbp(){
    this.rup = this.gbp*96.92;
    this.dol = this.gbp*1.31;
    this.eur = this.gbp*1.11;
    this.jpy = this.gbp*135.98;
  }
  calceur(){
    this.rup = this.eur*87.26;
    this.dol = this.eur*1.18;
    this.jpy = this.eur*122.43;
    this.gbp = this.eur*0.90;
  }
  reset(){
    this.gbp = ''
    this.eur = ''
    this.rup = ''
    this.dol = ''
    this.jpy = ''
  }
}
