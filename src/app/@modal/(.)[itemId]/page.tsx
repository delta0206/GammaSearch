import { Modal } from '@/components/modal';

export default function ModalItem({ params: { itemId } }: { params: { itemId: string } }) {
  return <Modal>{itemId}</Modal>;
}
