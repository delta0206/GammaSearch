'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Item } from '@/types/data';
import { Fragment } from 'react';
import { SiteCard } from '@/components/card/site';
import { VideoCard } from '@/components/card/video';
import { ImageCard } from '@/components/card/image';

const getItems = async (): Promise<Item[]> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return [
    {
      id: '1',
      type: 'site',
      title: 'The Title',
      description: 'The description of the result',
      href: 'https://www.minecraft.net/ja-jp',
    },
    {
      id: '2',
      type: 'video',
      title: 'The Title',
      description: 'The description of the result',
      href: 'https://www.youtube.com/watch?v=-bVemrIfcv4',
    },
    {
      id: '3',
      type: 'image',
      title: 'The Title',
      description: 'The description of the result',
      href: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Hero-A-1920_Summer-Sale-24_2560x932.jpg',
    },
    {
      id: '4',
      type: 'site',
      title: 'The Title',
      description: 'The description of the result',
      href: 'https://www.minecraft.net/ja-jp',
    },
    {
      id: '5',
      type: 'video',
      title: 'The Title',
      description: 'The description of the result',
      href: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/videos/MC-Homepage_Ambient-Hero_Marketplace-Pass_2560x932.webm',
    },
    {
      id: '6',
      type: 'video',
      title: 'The Title',
      description: 'The description of the result',
      href: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/videos/MC-Homepage_Ambient-Hero_Marketplace-Pass_2560x932.webm',
    },
    {
      id: '7',
      type: 'video',
      title: 'The Title',
      description: 'The description of the result',
      href: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/videos/MC-Homepage_Ambient-Hero_Marketplace-Pass_2560x932.webm',
    },
    {
      id: '8',
      type: 'video',
      title: 'The Title',
      description: 'The description of the result',
      href: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/videos/MC-Homepage_Ambient-Hero_Marketplace-Pass_2560x932.webm',
    },
  ];
};

export async function ResultPreview() {
  const items = await getItems();
  return (
    <div className='grid grid-cols-2 gap-4'>
      {items.map((item, index) => (
        <Fragment key={item.id}>
          {item.type === 'site' && <SiteCard item={item} />}
          {item.type === 'video' && <VideoCard item={item} />}
          {item.type === 'image' && <ImageCard item={item} />}
        </Fragment>
      ))}
    </div>
  );
}

export function ResultPreviewLoading() {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <Card key={i} className='w-64 h-64'>
            <CardHeader>
              <div className='w-full h-8 bg-stone-700 rounded animate-pulse'></div>
            </CardHeader>
            <CardContent className='grid gap-4'>
              <div className='w-full h-28 bg-stone-700 rounded animate-pulse'></div>
              <div className='w-full h-4 bg-stone-700 rounded animate-pulse'></div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
