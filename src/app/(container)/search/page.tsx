import axios from 'axios';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import AvailableRoom from '@/components/container/search/AvailableRoom';
import SearchRoomForm from '@/components/container/search/SearchRoomForm';

async function getAvailableRoomData(checkInDate: any, checkOutDate: any) {
  const response = await axios.post('http://localhost:8080/filtering', { checkInDate, checkOutDate }, { headers: { 'Content-Type': 'application/json' }})
    .then(function (response) {
      return response.data.room;
    })
    .catch(function (error) {
      console.log(error.response.data.message);
    });
  return response;
};

export default async function Search({ searchParams }: { searchParams: { [key: string]: string | undefined }}) {
  const availableRoomData = await getAvailableRoomData(searchParams.from ?? '', searchParams.to ?? '');

  return (
    <>
      <Navbar />
      <Link href='/'><svg fill="#5E17EB" viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className={cn('absolute left-2 top-2 lg:hidden w-14 animate-pulse')}><title>back</title><path d="M15.281 7.188v17.594l-15.281-8.781z"></path></svg></Link>
      <main className={cn('mb-auto')}>
        <SearchRoomForm searchParams={searchParams} />
        <AvailableRoom data={availableRoomData} searchParams={searchParams} />
      </main>
      <Footer />
    </>
  );
};
