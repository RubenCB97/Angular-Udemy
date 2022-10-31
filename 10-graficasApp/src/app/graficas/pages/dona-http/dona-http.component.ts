import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { delay } from 'rxjs/operators';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [];
  
  public doughnutChartData: ChartData<'doughnut'> = {
    datasets:[]
  };
  
  public doughnutChartType: ChartType = 'doughnut';
  
  
  constructor(private gs: GraficasService) { }

  ngOnInit(): void {

    // this.gs.getDataDona()
    //   .subscribe(data => {
    //     console.log(data);
    //     const labels = Object.keys(data);
    //     const values = Object.values(data);
    //     console.log(values);
    //     this.doughnutChartLabels = labels;
    //     console.log(this.doughnutChartLabels);
    //     // this.doughnutChartData.datasets = values;
    //   });
    this.gs.getUsuariosData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets =  [
          {
          data: values
          },   
        ]
      })
    
  }
  
}
