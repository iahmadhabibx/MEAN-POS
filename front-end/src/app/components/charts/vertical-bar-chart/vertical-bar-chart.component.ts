import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss']
})
export class VerticalBarChartComponent implements OnInit {

  CountyMedianProperty: any
  states = ['Navada', "New Mexico", "Paris"]
  years = [2012, 2013, 2014, 2015, 2016, 2017, 2018]
  dataSetCounty: any = []

  constructor() {
    Chart.register(...registerables);
  }
  ngOnInit() {
    this.LoadGraph()
  }

  LoadGraph() {
    var self = this

    // Making Three Lines , with each one of them with their own configuration
    this.dataSetCounty.push({
      label: 'Veronica',
      state: 'Navada',
      data: [3, 7, 1, 8, 4, 6, 2],
      datalabels: {
        align: 'start',
        anchor: 'start'
      },
      // borderDash: [10, 5],                            // dotted or dash line ,  change inside values to get more precise dotted or dashed
      lineTension: 0.4,                               // if 0 , straight line , if 0.4 curved line
      borderColor: "red",
      backgroundColor: 'rgba(255, 99, 132,0.4)',
      fill: true,                                 // background color fill kar day gay line sy neechay sara
      spanGaps: true,                              // dont the line on graph if null or no values available 
      pointStyle: 'rect',                             // star , triangle , rect , circle (default) , cross , crossRot , dash , line , rectRounded , rectRot
      pointText: [3, 7, 1, 8, 4, 6, 2],
      pointRadius: 10,
      pointHoverRadius: 15

    });

    // Loading Graph
    // this.CountyMedianProperty.destroy();
    this.CountyMedianProperty = new Chart(
      'myChart',
      {
        type: "line",
        data: {
          labels: this.years,
          datasets: this.dataSetCounty,
        },
        options: {
          // click on anywhere on graph 
          onClick: (e) => {
            console.log("on click..", e)
          },
          plugins: {
            // Title at top of the chart
            title: {
              //  see more configuration of title at  ------->          https://www.chartjs.org/docs/latest/configuration/title.html 
              display: true,
              text: 'Custom Chart Title',
              align: 'center',                                 // value --->  start , center , end
              color: "teal",
              position: "top",                               // value --> top , bottom , right ,left
              padding: 20                       // implemented at onlu top and bottom
            },
            // subtitle right below title at tof the chart
            subtitle: {
              display: true,
              text: 'Custom Chart Subtitle',
              align: 'center',
              // fullSize: false
              position: "top",                               // value --> top , bottom , right ,left
              font: { weight: 'bold', size: 20, family: "serif" },
              padding: 10                       // implemented at onlu top and bottom
            },
            // tooltips configuration
            tooltip: {
              // see more configuration of tooltip at --->  https://www.chartjs.org/docs/latest/configuration/tooltip.html 
              // footerFontStyle: "normal",
              enabled: true,
              position: 'average',                       // values ---> nearest ,average
              backgroundColor: "#000",
              titleColor: 'White',
              titleAlign: "right",                        // values ---> left, center , right
              titleSpacing: 8,
              titleMarginBottom: 16,
              //body
              bodyFont: { weight: "normal" },
              bodyAlign: "center",                         // values ---> left, center , right
              bodySpacing: 2,
              bodyColor: "White",
              //footer
              footerColor: "blue",
              footerAlign: "left",                 // values ---> left, center , right
              footerSpacing: 12,
              footerMarginTop: 20,
              // for The coloured box which appears in tooltip , 
              displayColors: true,
              // usePointStyle: true,
              boxHeight: 20,
              boxWidth: 20,
              boxPadding: 10,
              // callback functions
              callbacks: {
                // beforeTitle: (tooltipItem) => {
                //   return 'I am before Title'
                // },
                title: (tooltipItem) => {
                  return 'I am Title'
                },
                // afterTitle: (tooltipItem) => {
                //   return 'I am after Title'
                // },
                // beforeLabel: function (tooltipItem) {
                //   return "I am before label"
                // },
                label: function (tooltipItem) {
                  return `state[0]:${self.states[0]}`;
                },
                labelColor: (tooltipItem) => {
                  return {
                    borderColor: 'white',
                    backgroundColor: 'orange',
                    borderWidth: 2,
                    borderDash: [2, 2],
                    borderRadius: 2,
                  };
                },
                // labelTextColor: function (tooltipItem) {
                //   return 'orange'
                // },
                // afterLabel: function (tooltipItem) {
                //   return "i am after Lable"
                // },
                // beforeBody: function (tooltipItem) {
                //   return "i am before body"
                // },
                // afterBody: function (tooltipItem) {
                //   return "i am after body"
                // },
                // beforeFooter: (tooltipItem) => {
                //   return `i am before`;
                // },
                // footer: function (tooltipItem) {
                //   return `i am footer`;
                // },
                // afterFooter: function (tooltipItem) {
                //   return "i am after footer"
                // },
              },
            },
            legend: {
              display: true,
              position: "top",    // bottom , right , left , chartArea
              labels: {
                textAlign: "left",
                padding: 30,

              },
              onClick: function (evenrt, legendItem, legend) { },
              onLeave: function (evenrt, legendItem, legend) { },
              onHover: function (evenrt, legendItem, legend) { }
            },

          },
          scales: {
            xAxis: {
              grid: {
                //  see more grid confihuration at -----> "https://www.chartjs.org/docs/latest/axes/styling.html"
                display: true,               //  jo grapgh k peechay lines arai unhe hide show karwanay k liye
                drawTicks: false,
                // borderColor: "red",          // x-axis bottom line ka color 
                // color: "blue"               // x-axis ki values per jo oper tak lines ban rai un ka color
              },
              title: {
                display: true,
                text: 'Years',
                color: "blue",
                font: {
                  family: "serif",
                  style: "normal",
                  size: 20
                },
                padding: 1                      // x-axis label title ki padding
              },

              // x-axis main jo values ha Years ki 2012,2013 etc us ki sari styling
              ticks: {
                //  see more ticks confihuration at -----> "https://www.chartjs.org/docs/latest/axes/styling.html#major-tick-configuration"
                color: "blue",
                padding: 20                        // x-axis labels values ki padding
                // callback: function (value , index, values) {
                //   return `${self.years}Y`;
                // },
              },
            },
            yAxis: {
              grid: {
                //  see more grid confihuration at -----> "https://www.chartjs.org/docs/latest/axes/styling.html"
                display: true,               //  jo grapgh k peechay lines arai unhe hide show karwanay k liye
                drawTicks: false,
              },
              title: {
                color: "blue",
                display: true,
                text: 'Y-axis Values',
                font: {
                  size: 24,
                  family: "serif",
                  style: "normal"
                },
                padding: 1, 
              },

              ticks: {
                //  see more ticks confihuration at -----> "https://www.chartjs.org/docs/latest/axes/styling.html#major-tick-configuration"
                callback: function (value, index, values) {
                  return `${value}%`;
                },

                color: "blue",
                padding: 20
              },
            },
          }

        }
      }
    )
  }

}
