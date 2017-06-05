import React, {
  Component
} from 'react';
import G2, {
  Stat
} from 'g2';

import chinaGeoJSON from '../constants/china.json';
import provinceJSON from '../constants/province.json';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.chart = null;
    this.chartId = 'map-chart';
    this.max = 0;
    this.min = 0;
    this.step = 0;
  }

  componentDidMount() {
    this._initChart();
  }

  componentWillUmount() {
    this.chart.destroy();
  }

  _processDataProvinceData(data) {
    if (data && data.length) {
      data.sort((a, b) => b.value - a.value);
      this.max = data[0].value;
      this.min = data[data.length - 1].value;
      this.step = parseInt((this.max - this.min)/4);
    }
  }

  _initChart() {
    this.chart = new G2.Chart({
      id: this.chartId,
      width: 500,
      height: 400,
      syncXYScales: true
    });
    this.chart.legend(false);
    this._processDataProvinceData(provinceJSON);
    this.regionView = this.chart.createView();
    this.regionView.source(provinceJSON);
    this.regionView.polygon()
      .position(Stat.map.region('name', chinaGeoJSON))
      .color('#37408e')
      .shape('stroke')
      .style({
        stroke: 'transparent',
        lineWidth: 4
      });

      this.pointView = this.chart.createView();
      this.pointView.source([]);
      this.pointView.point().position(Stat.map.location('longitude*latitude'))
        .size('value', 12, 1)
        .color('#FF934C')
        .shape('circle')
        .style({
          shadowBlur: 50,
          shadowColor: '#0000ff'
        });

      this.chart.render();
  }
  render() {
    return (
      <div id={this.chartId}></div>
    );
  }
}
