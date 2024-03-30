import { Badge } from '@/components/ui/badge';
import { Link } from '@/components/Link';

export function Examples() {
  return (
    <div className='space-x-4'>
      <span>Try</span>
      <Link href='/?q=Chair+and+Table'>
        <Badge>Chair and Table</Badge>
      </Link>
      <Link href='/?q=House'>
        <Badge>House</Badge>
      </Link>
      <Link href='/?q=Cobblestone+Generator'>
        <Badge>Cobblestone Generator</Badge>
      </Link>
    </div>
  );
}
