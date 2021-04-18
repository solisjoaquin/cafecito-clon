import Head from 'next/head'
import { Comments } from '../components/Comments'
import { Cta } from '../components/Cta'
import { Footer } from '../components/Footer'
import { HowItWorks } from '../components/HowItWorks'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <div className="" style={{ maxWidth: "64rem", margin: "auto" }}>
        <Navbar />
        <Cta />
        <HowItWorks />
        <Comments />
        <Footer />
      </div>
      <style jsx>{`
      /* .page {
        background: rgb(255,242,57);
        background: linear-gradient(90deg, rgba(253, 230, 138) 0%,  #fbbf24 100%);     
      }  */        
      `}</style>
    </div>
  )
}
