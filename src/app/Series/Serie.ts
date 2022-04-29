export class Serie {
  id : number;
  name: string;
  channel: string;
  seasons: number;
  watchUrl: string;
  description: string;
  imgUrl: string

  public constructor(id: number, name: string, channel: string, seasons: number, description: string, watchUrl: string, imgUrl: string) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.imgUrl = imgUrl;
      this.description = description;
      this.watchUrl = watchUrl;
  }
}
