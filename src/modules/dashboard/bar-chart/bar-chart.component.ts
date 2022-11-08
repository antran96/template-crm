import { Component, Input, OnInit } from "@angular/core";
import { color } from "echarts";
import { BarChart } from "echarts/charts";
import { TooltipComponent, GridComponent, LegendComponent } from "echarts/components";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"]
})
export class BarChartComponent implements OnInit {
  readonly echartsExtentions: any[];
  echartsOptions: any = {};

  @Input() dataChart: any

  constructor() {
    this.echartsExtentions = [BarChart, TooltipComponent, GridComponent, LegendComponent];
  }

  ngOnInit(): void {
    this.onChartInit()
    this.onBindingDataChart()
    console.log(this.echartsOptions)
  }

  onChartInit(): void {
    this.echartsOptions = {
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [],
          type: 'bar'
        }
      ]
    }
  }

  onBindingDataChart(): void {
    this.dataChart.forEach((element: { status: any; count: any }) => {
      this.echartsOptions.xAxis.data.push(element.status)
      this.echartsOptions.series[0].data.push(
        {
          value: element.count,
          itemStyle: { color: this.generateRandomColor(element.status) }
        }
      )
    })
  }

  generateRandomColor(status: string) {
    let color: any
    const arrColor = [
      { status: 'New', color: '#ffc296'},
      { status: 'Processing', color: '#bbe888' },
      { status: 'Reversing', color: '#f493b8' },
      { status: 'Cancel', color: '#9e9bea' }
    ]
    arrColor.forEach((item: any) => {
      if(item.status === status) {
         color = item.color
      }
    })
    return color;
  }
}