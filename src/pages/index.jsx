import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Head from 'next/head'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Portfolio</title>
      </Head>
      <main className='bg-fundo'>
      <Navbar />
      <About />
      <Skills />
      </main>
    </>
  )
}
