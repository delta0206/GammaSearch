'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LuLoader2, LuSearch } from 'react-icons/lu';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useViewTransitionRouter from '@/hooks/viewTransitionRouter';

export function QueryInput() {
  const searchParams = useSearchParams();
  const router = useViewTransitionRouter();
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const addQuery = (e: React.FormEvent) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    newParams.set('q', query);
    router.push('/result?' + newParams.toString());
  };

  return (
    <form
      className='flex border px-3 py-2 items-center justify-center rounded-lg'
      onSubmit={addQuery}
    >
      <Input
        className='border-transparent focus-visible:ring-transparent min-w-[24rem]'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant='ghost' size='icon' type='submit'>
        <LuSearch size={20} />
      </Button>
    </form>
  );
}

export function QueryInputLoading() {
  return (
    <div className='flex border px-3 py-2 items-center justify-center rounded-lg'>
      <Input className='border-transparent focus-visible:ring-transparent min-w-[24rem]' disabled />
      <Button variant='ghost' size='icon' disabled>
        <LuLoader2 size={20} className='animate-spin' />
      </Button>
    </div>
  );
}
