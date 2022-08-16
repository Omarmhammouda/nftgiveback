import { Component, Input, OnInit } from '@angular/core';
import { PrizeModel } from '../shared/models/prize.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() data: PrizeModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public get thumbnailPrizes(){
    return this.data.filter(x => x.image !== '')
  }

  public get noThumbnailPrizes(){
    return this.data.filter(x => x.image === '')
  }

}
