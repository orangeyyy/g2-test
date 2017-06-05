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

    this.chart.line()
      .position("label*value");

    this.chart.render();

    setTimeout(() => {
      console.log('setData');
      this.chart.changeData([]);
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
