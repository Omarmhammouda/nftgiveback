export class PrizeModel {
  public title: string;
  public prize: string;
  public image: string;
  public description: string[];

  constructor() {
    this.title = '';
    this.prize = '';
    this.image = '';
    this.description = [];
  }
}
