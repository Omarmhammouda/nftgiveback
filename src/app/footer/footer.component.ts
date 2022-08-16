import { Component, OnInit } from '@angular/core';
import { faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { SubscribeInfoComponent } from '../subscribe-info/subscribe-info.component';
import { SubscribeInfoModel } from '../shared/models/subscribe-info.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public faInstagram = faInstagram;
  public faTwitter = faTwitter;
  public faDiscord = faDiscord;
  public subscribeInfo: SubscribeInfoModel = new SubscribeInfoModel();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SubscribeInfoComponent, {
      width: '300px',
      data: this.subscribeInfo,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result){
        this.subscribeInfo = new SubscribeInfoModel();
      } else {
        this.subscribeInfo = result;
      }
    });
  }

}
