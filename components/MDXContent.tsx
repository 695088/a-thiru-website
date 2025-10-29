'use client';

import { MDXRemote } from 'next-mdx-remote';
import { Chart } from './Chart';
import { D3Visualization } from './D3Visualization';
import { BlogImage } from './BlogImage';
import { serialize } from 'next-mdx-remote/serialize';
import { useEffect, useState } from 'react';

interface MDXContentProps {
  content: string;
}

const components = {
  Chart,
  D3Visualization,
  BlogImage,
  h1: (props: any) => <h1 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '1.5rem', letterSpacing: '-0.02em' }} {...props} />,
  h2: (props: any) => <h2 style={{ fontSize: '1.5rem', fontWeight: 400, marginTop: '3rem', marginBottom: '1rem', letterSpacing: '-0.01em' }} {...props} />,
  h3: (props: any) => <h3 style={{ fontSize: '1.2rem', fontWeight: 400, marginTop: '2rem', marginBottom: '0.75rem' }} {...props} />,
  p: (props: any) => <p style={{ marginBottom: '1.5rem', color: '#666', lineHeight: 1.8 }} {...props} />,
  ul: (props: any) => <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }} {...props} />,
  ol: (props: any) => <ol style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }} {...props} />,
  li: (props: any) => <li style={{ marginBottom: '0.5rem', color: '#666' }} {...props} />,
  blockquote: (props: any) => (
    <blockquote 
      style={{ 
        borderLeft: '3px solid #e5e5e5', 
        paddingLeft: '1.5rem', 
        margin: '2rem 0', 
        fontStyle: 'italic', 
        color: '#666' 
      }} 
      {...props} 
    />
  ),
  code: (props: any) => (
    <code 
      style={{ 
        background: '#f5f5f5', 
        padding: '0.2rem 0.5rem', 
        borderRadius: '3px', 
        fontSize: '0.9em',
        fontFamily: "'Monaco', 'Courier New', monospace"
      }} 
      {...props} 
    />
  ),
  pre: (props: any) => (
    <pre 
      style={{ 
        background: '#f5f5f5', 
        padding: '1.5rem', 
        borderRadius: '4px', 
        overflowX: 'auto', 
        marginBottom: '1.5rem' 
      }} 
      {...props} 
    />
  ),
  a: (props: any) => (
    <a 
      style={{ 
        borderBottom: '1px solid currentColor', 
        opacity: 0.7,
        transition: 'opacity 0.2s ease'
      }} 
      {...props} 
      onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; }}
    />
  ),
};

export default function MDXContent({ content }: MDXContentProps) {
  const [mdxSource, setMdxSource] = useState<any>(null);

  useEffect(() => {
    serialize(content, { parseFrontmatter: false }).then(setMdxSource);
  }, [content]);

  if (!mdxSource) {
    return <div>Loading...</div>;
  }

  return <MDXRemote {...mdxSource} components={components} />;
}
