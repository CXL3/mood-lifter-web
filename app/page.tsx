import HomeCarousel from './components/HomeCarousel'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <div className='z-10 w-full font-sans text-3xl'>
        <p className='text-center border-b text-black text-bold border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2x dark:from-inherit border bg-white'>
          Lifting my mood now
        </p>
      </div>
      <div className='demo-carousel w-full px-10 pt-10'>
        <HomeCarousel />
      </div>
    </main>
  )
}
