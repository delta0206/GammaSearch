'use client';

import useViewTransitionRouter from '@/hooks/viewTransitionRouter';
import { ElementRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function Modal({ children }: { children: React.ReactNode }) {
  const modalRef = useRef<ElementRef<'dialog'>>(null);
  const router = useViewTransitionRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  const onClose = () => {
    router.back();
  };

  return createPortal(
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>Name</div>
          <div className='grid grid-cols-4 items-center gap-4'>Username</div>
        </div>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>,
    // <div className='bg-stone-950/50'>
    //   <dialog className='absolute inset-0' ref={modalRef} onClose={onClose}>
    //     <div>{children}</div>
    //   </dialog>
    // </div>,
    document.getElementById('modal-root')!
  );
}
