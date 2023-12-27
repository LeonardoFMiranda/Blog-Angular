import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss','./small-card.responsive.component.scss']
})
export class SmallCardComponent implements OnInit {

  @Input()
  smallCardTitle:string = ""
  @Input()
  smallCardImg: string = '';
  constructor() { }
  @Input()
  Id:string="0"

  ngOnInit(): void {
  }

}
