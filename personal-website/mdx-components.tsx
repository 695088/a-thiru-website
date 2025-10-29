import type { MDXComponents } from 'mdx/types'
import { Chart } from '@/components/Chart'
import { D3Visualization } from '@/components/D3Visualization'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Chart,
    D3Visualization,
  }
}
