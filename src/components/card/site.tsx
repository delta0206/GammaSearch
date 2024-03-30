import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Item } from '@/types/data';

export function SiteCard({ item: { title, description, href } }: { item: Item }) {
  return (
    <Card className='w-[400px] h-[300px]'>
      <CardHeader>{title}</CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  );
}
