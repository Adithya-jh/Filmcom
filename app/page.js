import Image from 'next/image';
import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <main className="flex">
      <Feed />
      <Sidebar />
    </main>
  );
}
