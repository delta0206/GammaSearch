import { Examples } from '@/components/examples';
import { QueryInput, QueryInputLoading } from '@/components/query-input';
import { Suspense } from 'react';

export function Header() {
  return (
    <>
      <div>
        <h1 className='text-5xl'>Gamma Search</h1>
      </div>
      <div className='space-y-2 text-center'>
        <Suspense fallback={<QueryInputLoading />}>
          <QueryInput />
        </Suspense>
        <Examples />
      </div>
    </>
  );
}
