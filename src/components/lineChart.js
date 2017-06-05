import React, {
  Component
} from 'react';
import G2 from 'g2';
export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.chart = null;
    this.chartId = 'line-chart';
  }

  componentDidMount() {
    this.chart = new G2.Chart({
      id: this.chartId,
      width: 500,
      height: 300
    });
    this.chart.source([], {
      label: {
        type: 'timeCat',
        mask: 'mm-dd',
        alias: '时间'
      },
      value: {
        alias: '数量'
      }
    })
    this.chart.line()
      .position("label*value");

    this.chart.render();

    setTimeout(() => {
      console.log('setData');
      this.chart.changeData([{
        label: '2017-05-19',
        value: 100
      }, {
        label: '2017-05-20',
        value: 80
      }]);
    },  2000);
  }

  componentWillUmount() {
    this.chart.destroy();
  }

  render() {
    return (
      <div id={this.chartId}></div>
    );
  }
}
