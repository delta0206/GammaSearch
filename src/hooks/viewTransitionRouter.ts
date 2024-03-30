import { Route } from 'next';
import { usePathname, useRouter } from 'next/navigation';
import { useLayoutEffect, useRef } from 'react';

// Thanks to https://mh4gf.dev/articles/view-transitions-api

const startViewTransition = (callback: () => Promise<void> | void) => {
  if (!document.startViewTransition) {
    return void callback();
  }

  document.startViewTransition(callback);
};

export default function useViewTransitionRouter() {
  const router = useRouter();
  const pathname = usePathname();
  const callbacks = useRef<Record<'resolve' | 'reject', () => void> | null>(null);

  useLayoutEffect(() => {
    return () => {
      if (callbacks.current) {
        callbacks.current.resolve();
        callbacks.current = null;
      }
    };
  }, [pathname]);

  return {
    ...router,
    push: (href: Route) => {
      startViewTransition(
        () =>
          new Promise((resolve, reject) => {
            callbacks.current = { resolve, reject };
            router.push(href);
          })
      );
    },
    back: () => {
      startViewTransition(
        () =>
          new Promise((resolve, reject) => {
            callbacks.current = { resolve, reject };
            router.back();
          })
      );
    },
  };
}
