import React from 'react';
import type { Stat } from '../../types/content';
import { CountUp } from '../CountUp';
import { MetricViz } from './MetricViz';

interface MetricCellProps {
  metric: Stat;
  large?: boolean;
  className?: string;
}

export function MetricCell({ metric, large = false, className = '' }: MetricCellProps) {
  return (
    <div className={`flex flex-col bg-bg-raised p-6 md:p-8 ${large ? 'lg:p-10' : ''} ${className}`}>
      <dl className="flex flex-col-reverse">
        <dt>
          <span className={`mt-2 block font-medium text-ink ${large ? 'text-lg' : 'text-base'}`}>{metric.label}</span>
          {metric.context && <span className="mt-1 block text-sm text-muted">{metric.context}</span>}
        </dt>
        <dd
          className={`font-display font-semibold leading-none tracking-[-0.04em] ${
          large ? 'text-6xl text-positive md:text-7xl' : 'text-4xl text-ink md:text-5xl'}`
          }>
          
          <CountUp value={metric.value} prefix={metric.prefix} suffix={metric.suffix} rangeStart={metric.rangeStart} />
        </dd>
      </dl>
      {metric.viz &&
      <div className="mt-auto pt-10">
          <MetricViz viz={metric.viz} />
        </div>
      }
    </div>);

}