import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='border-t-2 sm:text-base  dark:text-light dark:border-light border-solid text-lg font-medium border-dark'>
        <Layout classname='py-8 flex items-center lg:flex-col lg:py-6 justify-between'>
            <span>{new Date().getFullYear}&copy; All Rights Reserved</span>

            <div className="lg:py-2 flex items-center">Build  <span className='text-2xl dark:text-primaryDark text-primary px-1'>&#9825;</span>
                by&nbsp;<Link href={'/'} className='underline' target='_blank'>CHOKOTE</Link>
            </div>

            <Link href={'/'} target='_blanl' className='underline'>say hello</Link>

        </Layout>
    </footer>
  )
}

export default Footer