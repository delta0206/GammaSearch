import { Card, CardContent } from '@/components/ui/card';
import { Item } from '@/types/data';
import Link from 'next/link';
// import { Link } from '@/components/Link';

export function ImageCard({ item: { id, title, description, href } }: { item: Item }) {
  return (
    <Card className='w-[400px] h-[300px] relative'>
      <Link className='absolute inset-0' href={`/${id}`}></Link>
      <CardContent className='pt-6 h-full'>
        <img src={href} alt={title} className='w-full h-full object-contain' />
      </CardContent>
    </Card>
  );
}
