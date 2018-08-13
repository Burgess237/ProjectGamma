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
content = this.RNJesus();
colFooter = '</div>';
rowFooter = '</div></div>';



html = this.rowHeader + this.colHeader + this.content + this.colFooter + this.rowFooter;


  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.htmlData = this.sanitizer.bypassSecurityTrustHtml(this.html);
  }

  RNJesus(): any {
    return this.RandomWords[parseInt(' ' +  Math.random() * 50, 10)];
  }
}
