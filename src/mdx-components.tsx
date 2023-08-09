import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { DetailedHTMLProps, HTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react';
import slugify from '@sindresorhus/slugify';
 
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
    h1: ({children}: {children?: ReactNode}) => <h1 id={slugify(children!!.toString())}>{children}</h1>,
    h2: ({children}: {children?: ReactNode}) => <h2 id={slugify(children!!.toString())}>{children}</h2>,
    h3: ({children}: {children?: ReactNode}) => <h3 id={slugify(children!!.toString())}>{children}</h3>,
    h4: ({children}: {children?: ReactNode}) => <h4 id={slugify(children!!.toString())}>{children}</h4>,
    h5: ({children}: {children?: ReactNode}) => <h5 id={slugify(children!!.toString())}>{children}</h5>,
    h6: ({children}: {children?: ReactNode}) => <h6 id={slugify(children!!.toString())}>{children}</h6>,
    img: ResponsiveImage,
    ...components,
  }
}