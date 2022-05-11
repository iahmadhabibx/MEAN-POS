import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  ordersPayload = {
    ordersPeriod: "Today",
  };

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
      // borderDash: [10, 1],                            // dotted or dash line ,  change inside values to get more precise dotted or dashed
      lineTension: 0,                               // if 0 , straight line , if 0.4 curved line
      borderColor: "#273c75",
      backgroundColor: [
        '#273c75',
        '#132a68',
        '#c41429'
      ],
      fill: true,                                 // background color fill kar day gay line sy neechay sara
      spanGaps: true,                              // dont the line on graph if null or no values available 
      pointStyle: 'circle',                             // star , triangle , rect , circle (default) , cross , crossRot , dash , line , rectRounded , rectRot
      pointText: [3, 7, 1, 8, 4, 6, 2],
      pointRadius: 6,
      pointHoverRadius: 15

    });

    // Loading Graph
    // this.CountyMedianProperty.destroy();
    this.CountyMedianProperty = new Chart(
      'pieChart',
      {
        type: "pie",
        data: {
          labels: this.years,
          datasets: this.dataSetCounty,
        },
        options: {
          // click on anywhere on graph 
          onClick: (e) => {
            console.log("on click..", e)
          },
          responsive: true,
          maintainAspectRatio: false,
          onResize: (e) => {
            console.log(e);
            
          },
          plugins: {
            // Title at top of the chart
            title: {
              //  see more configuration of title at  ------->          https://www.chartjs.org/docs/latest/configuration/title.html 
              display: true,
              text: 'Orders',
              align: 'center',                                 // value --->  start , center , end
              color: "teal",
              position: "top",                               // value --> top , bottom , right ,left
              font: { weight: 'bold', size: 20, family: "verdana" },
            },
            // subtitle right below title at tof the chart
            subtitle: {
              display: false,
              text: this.ordersPayload.ordersPeriod,
              align: 'center',
              // fullSize: false
              position: "top",                               // value --> top , bottom , right ,left
              font: { weight: 'bold', size: 20, family: "serif" },
              padding: 0                    // implemented at onlu top and bottom
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
              footerColor: "#273c75",
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
              display: false,
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

        }
      }
    )
  }

}
