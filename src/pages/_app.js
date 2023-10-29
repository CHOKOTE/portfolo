import '@/styles/globals.css'
import { Montserrat} from 'next/font/google'
import Head from 'next/head'
import NavBar from '../component/NavBar'
import Footer from '@/component/Footer'
import { AnimatePresence } from 'framer-motion'

import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router.js';
 
const montserrat = Montserrat({
  
  subsets: ['latin'],
  variable:'--font-mont'
})
 
export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (

    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
       <ThemeProvider attribute="class" > 
       <main className={`${montserrat.variable} dark:bg-dark font-mont bg-light w-full min-h-screen`}>
         <NavBar/>
         
         <AnimatePresence mode={'wait'}>
             <Component key={router.asPath} {...pageProps} />
         </AnimatePresence>
        
         
         <Footer/>
         
      </main>
          
        </ThemeProvider>
      
      
    
    </>
  )
}
