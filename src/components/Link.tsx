'use client';

import useViewTransitionRouter from '@/hooks/viewTransitionRouter';
import NextLink, { LinkProps } from 'next/link';

type NextLinkProps = LinkProps & {
  className?: string;
  children?: React.ReactNode;
};

export function Link({ href, children, ...props }: NextLinkProps) {
  const router = useViewTransitionRouter();

  const handleRouting = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href.toString());
  };

  return (
    <NextLink href={href} onClick={handleRouting} {...props}>
      {children}
    </NextLink>
  );
}
