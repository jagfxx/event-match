
import Image from "next/image";
import Link from "next/link";
import TypewriterClient from '../components/TypewriterClient';
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className=" flex flex-col gap-[60px] row-start-2 items-center justify-center w-[200px]">
      <TypewriterClient />
       <div className="flex flex-col gap-[20px] w-full">
       
       <Link className="bg-[#ffffff] text-black p-2 rounded hover:bg-[#181818] hover:text-white transition duration-300 ease-in-out text-center w-full" href="/auth/login">Login</Link>
        <Link className="bg-[#ffffff] text-black p-2 rounded hover:bg-[#181818] hover:text-white transition duration-300 ease-in-out text-center w-full" href="/auth/register">Register</Link>
       </div> 
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>© 2025 Event Match. All rights reserved.</p>
      </footer>
    </div>
  );
}
