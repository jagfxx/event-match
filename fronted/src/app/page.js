import AuthButtons from '../components/AuthButtons';
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className=" flex flex-col gap-[60px] row-start-2 items-center justify-center w-[200px]">
       <AuthButtons />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>© 2025 EventMatch. All rights reserved.</p>
      </footer>
    </div>
  );
}
