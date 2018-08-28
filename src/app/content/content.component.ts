import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { R3Injector } from '../../../node_modules/@angular/core/src/di/r3_injector';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
htmlData: any;
content: any;


RandomWords = ['nulla', 'amet', 'eiusmod', 'aliqua', 'nostrud', 'enim', 'nostrud', 'elit', 'fugiat' , 'id', +
                'proident', 'aliquip', 'laborum', 'sunt', 'do', 'ea', 'cillum', 'mollit', 'eiusmod', 'ex', 'labore', +
                'sint', 'exercitation', 'non', 'non', 'aliqua', 'ullamco', 'excepteur', 'non', 'ex', 'pariatur', +
                'cupidatat', 'laboris', 'velit', 'reprehenderit', 'velit', 'consequat', 'consectetur', 'cupidatat', +
                'excepteur', 'exercitation', 'anim', 'cupidatat', 'pariatur', 'consectetur', 'irure', 'exercitation', +
                'labore', 'amet', 'nostrud', 'eiusmod', 'labore', 'proident', 'culpa', 'commodo', 'excepteur', 'consequat', +
                'occaecat', 'aute', 'nisi', 'eiusmod', 'culpa', 'laboris', 'ad', 'aliquip', 'sit', 'id', 'sit', 'labore', +
                'adipisicing', 'enim', 'eu', 'ad', 'enim', 'non', 'sit', 'dolore', 'cupidatat', 'qui', 'laboris',  'laborum', +
                'sunt', 'ullamco', 'aliqua', 'elit', 'laboris', 'exercitation', 'duis', 'amet', 'officia', 'exercitation', +
                'magna', 'excepteur', 'nostrud', 'cillum', 'sunt', 'consequat', 'ullamco', 'fugiat', 'ea' ];

rowHeader = '<div class = "container"><div class = "row">';
colHeader = '<div class = "col-md">';

colFooter = '</div>';
rowFooter = '</div></div>';
html = this.rowHeader + this.colHeader + this.Generate() + this.colFooter + this.rowFooter;

Random = Math.random() * 50;
// this statement doesnt work
Generate() {
if (this.Random < 12.5) {
    return '1st Group';
  } else if (this.Random > 12.5 && this.Random < 25) {
    return '2nd Group';
  } else if (this.Random > 25 && this.Random < 37.5) {
    return '3rd group';
  } else if (this.Random > 37.5 && this.Random < 50) {
    return this.RNJesus();
  }   else {
    return 'This isnt working';
  }
}

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.htmlData = this.sanitizer.bypassSecurityTrustHtml(this.html);
  }

  RNJesus(): any {
    return this.RandomWords[parseInt(' ' +  Math.random() * 50, 10)];
  }
}
