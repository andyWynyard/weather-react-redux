import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default(props) => {
  return (<div >
    <Sparklines data={props.data} height={120} width={180}>
      <SparklinesLine color={props.color}/>
      <SparklinesReferenceLine type="avg"/>
    </Sparklines>
    <div className="text-center">{props.preText}
      {average(props.data)}
      {props.units}</div>
  </div>)
}
