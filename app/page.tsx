import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       
         <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Sacrament Meeting
          </h1>

       <Image
         src="/meeting.jpg"
         alt="Sacrament meeting"
         width={1200}
         height={600}
        className="rounded-xl"
        priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Your place to review, plan, and anticipate all your sacrament meetings.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
         
          </a>
        
        </div>
      </main>
    </div>
  );
}
