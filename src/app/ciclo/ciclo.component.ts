import { AfterContentChecked,
         AfterContentInit,
          AfterViewChecked,
          AfterViewInit,
          Component,
          DoCheck,
          Input,
          OnChanges,
          OnDestroy,
          OnInit, } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
 AfterViewInit, AfterViewChecked,AfterContentChecked ,OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() { 
    this.log('Constructor');
  }


  ngOnChanges() {
     this.log('ngOnChanges');
     
  }

  ngOnInit(){
    this.log('ngOnInit');
  }
  ngDoCheck() {
   this.log('ngDoCheck'); 
  }
  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }
  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }
  ngOnDestroy() {
    this.log('ngOnDestroy');
  }
  private log(hook: string){
    console.log(hook);
  }
  

}
