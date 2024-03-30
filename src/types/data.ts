export type Item = {
  id: string;
  type: 'site' | 'video' | 'image';
  title: string;
  description: string;
  href: string;
};
