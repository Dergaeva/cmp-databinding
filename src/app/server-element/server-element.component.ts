import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy

{
  @Input('srvElement') element: { type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log("constructor logged");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("OnChanges logged");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit logged");
    console.log("Text Content of Component:" + this.paragraph.nativeElement.textContent);

  }

  ngDoCheck() {
    console.log('ngDocheck call');
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called!");
    console.log("Text content:" + this.header.nativeElement.textContent);
    console.log("Text Content of Component:" + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!")
  }

  ngAfterContentInit() {
    console.log("ngAfterViewInit called!")
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!")
  }

  OnDestroy() {
    console.log("OnDestroy called!")
  }

}
