'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface D3VisualizationProps {
  type?: 'line' | 'bar' | 'scatter';
  data?: any[];
  config?: any;
}

export function D3Visualization({ type = 'line', data, config = {} }: D3VisualizationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRendered = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasRendered.current) return;
    
    const container = d3.select(containerRef.current);
    container.selectAll('*').remove();

    // Sample visualization
    if (data && data.length > 0) {
      const margin = { top: 20, right: 20, bottom: 40, left: 40 };
      const width = containerRef.current.offsetWidth - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;

      const svg = container
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      const x = d3.scaleLinear()
        .domain(d3.extent(data, (d) => d.x) as [number, number])
        .range([0, width]);

      const y = d3.scaleLinear()
        .domain(d3.extent(data, (d) => d.y) as [number, number])
        .range([height, 0]);

      if (type === 'line') {
        const line = d3.line<{ x: number; y: number }>()
          .x((d) => x(d.x))
          .y((d) => y(d.y));

        svg.append('path')
          .datum(data)
          .attr('fill', 'none')
          .attr('stroke', '#000')
          .attr('stroke-width', 2)
          .attr('d', line);
      }

      svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg.append('g')
        .call(d3.axisLeft(y));
    }

    hasRendered.current = true;
  }, [data, type]);

  return (
    <div 
      ref={containerRef} 
      style={{ width: '100%', margin: '2rem 0', minHeight: '300px' }}
    />
  );
}
