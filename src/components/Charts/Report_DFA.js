import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import ReactDOM from 'react-dom'
import ReactApexChart from 'react-apexcharts'
import './Report.css'

class Report_DFA extends Component {
  constructor(props) {
    //attributes of the graph on x and y axis
    super(props)
    this.state = {
      options: {
        chart: {
          id: 'basic-bar',
        },

        xaxis: {
          categories: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
        },
        title: {
          text: 'Number of Attestation in Dangcol',
          align: 'center',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '30px',
            fontWeight: 'bold',
            fontFamily: String,
            color: '#7FFFD4',
          },
        },

        //color style of the x and y axis
        grid: {
          row: {
            colors: ['#2f4f4f', '#2f4f4f', '#2f4f4f'],
          },
          column: {
            colors: ['#2f4f4f', '#2f4f4f', '#2f4f4f'],
          },
        },
      },

      //different details rendered for the y-axis
      series: [
        {
          name: 'Attested Correctly',
          data: [20, 45, 456, 400, 39, 45, 465, 460],
        },

        {
          name: 'Failed Attested',
          data: [220, 410, 48, 74, 22, 400, 25, 40],
        },
        {
          name: 'Number of Attested',
          data: [240, 450, 475, 480, 439, 450, 490, 500],
        },
      ],
    }
  }

  render() {
    return (
      //render bar graphs with parameters
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <div>
          <div className="app">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  title={this.state.title}
                  width="900"
                  type="bar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//class component that will be used importing the graph to the dashboard

class Combine extends React.Component {
  render() {
    return (
      <section>
        <Report_DFA />
      </section>
    )
  }
}
ReactDOM.render(<Combine />, document.getElementById('root'))
export default Combine
