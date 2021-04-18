import Head from 'next/head'
import { Comments } from '../components/Comments'
import { Cta } from '../components/Cta'
import { Footer } from '../components/Footer'
import { HowItWorks } from '../components/HowItWorks'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Cafecito</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <div className="site">
        <Navbar />
        <Cta />
        <HowItWorks />
        <Comments />
        <Footer />
      </div>
      <style>{`
      .site {
        max-width: 64rem;
        margin: auto;
      }
      `}</style>
    </div>
  )
}
