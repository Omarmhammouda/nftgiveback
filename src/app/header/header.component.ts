import { Component, OnInit } from '@angular/core';
import { faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public faInstagram = faInstagram;
  public faTwitter = faTwitter;
  public faDiscord = faDiscord;

  constructor() { }

  ngOnInit(): void {
  }

}
