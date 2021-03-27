import React from 'react';
import {Statistic} from "semantic-ui-react";

const DisplayBalance = ({label, value, color = "black", size}) => {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{textAlign: "left"}}>{label}</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
};

export default DisplayBalance;
