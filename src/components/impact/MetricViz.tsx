import React from 'react';
import type { MetricViz as MetricVizType } from '../../types/content';
import { BarComparison } from './BarComparison';
import { DotField } from './DotField';
import { MultiplyBlocks } from './MultiplyBlocks';
import { RingGauge } from './RingGauge';

export function MetricViz({ viz }: {viz: MetricVizType;}) {
  switch (viz.kind) {
    case 'dots':
      return <DotField count={viz.count} columns={25} shape="dot" caption={viz.caption} />;
    case 'grid':
      return <DotField count={viz.count} columns={11} shape="square" caption={viz.caption} more />;
    case 'compare':
      return (
        <BarComparison
          mode="grow"
          baselineLabel={viz.baseline}
          resultLabel={viz.result}
          resultValue={viz.resultValue}
          caption={viz.caption} />);


    case 'reduce':
      return (
        <BarComparison
          mode="shrink"
          baselineLabel={viz.before}
          resultLabel={viz.after}
          resultValue={viz.afterValue}
          caption={viz.caption} />);


    case 'ring':
      return <RingGauge value={viz.value} caption={viz.caption} />;
    case 'multiply':
      return <MultiplyBlocks factor={viz.factor} caption={viz.caption} />;
    default:
      return null;
  }
}