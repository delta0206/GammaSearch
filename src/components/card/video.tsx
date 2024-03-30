import { Card, CardContent } from '@/components/ui/card';
import { Item } from '@/types/data';

function isFile(url: string) {
  return url.includes('.webm') || url.includes('.mp4') || url.includes('.mov');
}

function createEmbedUrl(url: string) {
  if (url.includes('youtube')) {
    const videoId = url.split('v=')[1];
    const queries = videoId.split('?')[1];
    return `https://www.youtube.com/embed/${videoId}?modestbranding=1&origin=${
      process.env.NEXT_PUBLIC_BASE_URL
    }${queries ? `&${queries}` : ''}`;
  }

  return url;
}

export function VideoCard({ item: { title, description, href } }: { item: Item }) {
  return (
    <Card className='w-[400px] h-[300px]'>
      <CardContent className='pt-6 h-full'>
        {!isFile(href) && <iframe className='w-full h-full' src={createEmbedUrl(href)}></iframe>}
        {isFile(href) && (
          <video className='w-full h-full' controls muted playsInline src={href}></video>
        )}
      </CardContent>
    </Card>
  );
}
