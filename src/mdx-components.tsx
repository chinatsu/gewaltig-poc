import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

const ResponsiveImage = ({alt, src}: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => (
    <Image alt={alt!!} width="0" height="0" sizes="100vw" className="w-full h-auto" src={src!!} />
  );
 
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    img: ResponsiveImage,
    ...components,
  }
}