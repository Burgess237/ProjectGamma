import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-generator',
  templateUrl: './row-generator.component.html',
  styleUrls: ['./row-generator.component.scss']
})
export class RowGeneratorComponent implements OnInit {
htmlData: any;
html: any;
i: any;
j: any;

num1: any;
num2: any;


ColArr: any[] = [];
RowArr: any[] = [];
RowStart = '<div class = "row">';
Column = '<div class = "col">';
RowEnd = '</div>';
GeneratedRows = this.createGrid();
createGrid() {
  this.num1 = Math.round((Math.random() * 2) + 2);
  this.num2 = Math.round((Math.random() * 4) + 4);
  for ( this.i = 1; this.i <= this.num1; this.i++) {
    this.html += this.RowStart;
      for ( this.j = 1; this.j <= this.num2; this.j++) {
        this.ColArr.push(this.j);
        this.html += this.Column;
        // method to generate random stuff?
    }
    this.RowArr.push(this.i);
    this.html += this.RowEnd;
  }
  return this.html;
}
constructor(private sanitizer: DomSanitizer) { }
  ngOnInit() {
    this.htmlData = this.sanitizer.bypassSecurityTrustHtml(this.GeneratedRows);
  }

}
