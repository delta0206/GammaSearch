export default function Item({ params: { itemId } }: { params: { itemId: string } }) {
  return <div>{itemId}</div>;
}
