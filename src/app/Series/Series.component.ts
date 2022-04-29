import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './Serie.service';


@Component({
  selector: 'app-Series',
  templateUrl: './Series.component.html',
  styleUrls: ['./Series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  average: number = 0;


  getSeriesList() {
    this.serieService.getCourses().subscribe(series => {
      this.series = series;
      this.seasonsAverage();
    });
  }

  seasonsAverage() {
    let sum = 0;
    if (this.series.length > 0) {
      for (let serie of this.series) {
        sum += serie.seasons;
      }
      this.average = Math.round((sum/this.series.length) * 100) / 100;
    }
  }

  ngOnInit() {
    this.getSeriesList();
  }
}
