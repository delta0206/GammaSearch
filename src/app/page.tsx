import { ResultPreview, ResultPreviewLoading } from '@/components/result-preview';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<ResultPreviewLoading />}>
      <ResultPreview />
    </Suspense>
  );
}
