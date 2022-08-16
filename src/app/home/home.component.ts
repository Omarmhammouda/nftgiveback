import { Component, OnInit } from '@angular/core';
import { PrizeModel } from '../shared/models/prize.model';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public faArrowDown = faArrowAltCircleDown;

  public prizes: PrizeModel[] = [
    {
      title : '1st Prize Winner',
      prize: '2020 McLaren 600LT',
      image : './assets/images/McLaren600LT.png',
      description : ['Orange Mods- DME stage 2.',
      '760 hp 690 tq',
      '2 weeks after winners are announced we\'ll book you a flight to sign over the title.',
      'If your not in the USA you have 2 choices we can send you a balance of eth or we can fly you out and put 4k down for your overseas shipping. Your in charge of everything after that.']
    },
    {
      title : '2nd Prize Winner',
      prize: '2017 BMW M3 F80 ',
      image : './assets/images/BMWM3.png',
      description : ['Marina Blue Mods- Pure turbo ps2+ 2021 redesigned version brand new 3k miles, Stage 4 fuel it port injection kit, Insane performance crank hub, Mpi Downpipe, Active auto midepipe, Mperfromance exhaust',
      'Drop in intake filters',
      'Mpi chargepipes',
      'Custom tuned on E85 by Cary Jordan',
      '700hp 680t']
    },
    {
      title : '3rd Prize Winner',
      prize: '2011 BMW 335is E92',
      image : './assets/images/BMWS3.png',
      description : ['White with gold sprinkle wrap, Original color is Gray',
      'Mods- Precision single turbo 6766 single scroll',
      'Transmission Type: DCT (also have new f80 trans), S55 fly wheel, Stage 2 ssp cluthes, Billet trans pan w/ trans cooler, M3 center console swap gts3 flash, M3 lsd',
      '3.15 gear ratio diff, Polyurethane trans/diff bushings',
      'Port injection w/ doc race manifold, Doc race down pipe, VRSF Race intercooler 7.5in\'',
      'Doc race charge pipe with tial BLV OEM eldor coils',
      'NGK Spark plugs 0.18',
      'Stage 3 lpfp',
      'Straight pipe single exit 3.5 exhaust',
      'Fuel Octane: Full E85',
      '600hp 550tq']
    },
    {
      title : '4th Prize Winner',
      prize: '2020 DRZ 400SM supermoto',
      image : './assets/images/DRZ400SM.png',
      description : []
    },
    {
      title : '5th Prize Winner',
      prize: '2 week Mentorship',
      image : '',
      description : ['One on One in Person  (flight and stay included)']
    },
    {
      title : '6th - 56th Prize Winners',
      prize: 'Stockhours Discord Chat',
      image : '',
      description : ['3 free months']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
