import { Component, OnInit} from '@angular/core';
import { NgbTabsetConfig, NgbAccordionConfig } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [NgbTabsetConfig]
})

export class MainComponent implements OnInit {

Accordians = [0, 1 , 2 , 3 , 4 , 5, 6, 7, 8, 9, 10, 11];
myAccordian = this.Accordians[0];

  constructor( config: NgbAccordionConfig) {
    config.type = 'info';
    config.closeOthers = false;
   }

  ngOnInit() {
  }

}
