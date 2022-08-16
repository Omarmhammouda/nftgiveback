import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscribeInfoModel } from '../shared/models/subscribe-info.model';

@Component({
  selector: 'app-subscribe-info',
  templateUrl: './subscribe-info.component.html',
  styleUrls: ['./subscribe-info.component.scss']
})
export class SubscribeInfoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SubscribeInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SubscribeInfoModel
  ) { }

  ngOnInit(): void {
    if(this.data){
      this.data = new SubscribeInfoModel();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
