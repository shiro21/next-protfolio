// import { Inter } from '@next/font/google'
import Hero from '@/components/main/hero'
import Seo from '@/components/seo'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Seo title="메인" />

      <Hero />
    </>
  )
}
