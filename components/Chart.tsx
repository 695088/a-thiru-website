'use client';

import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), { 
  ssr: false 
});

interface ChartProps {
  data: any;
  layout?: any;
  config?: any;
}

export function Chart({ data, layout = {}, config = {} }: ChartProps) {
  return (
    <div style={{ width: '100%', margin: '2rem 0' }}>
      <Plot
        data={data}
        layout={{
          ...layout,
          autosize: true,
          responsive: true,
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
        }}
        config={{
          ...config,
          displayModeBar: false,
          responsive: true,
        }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
