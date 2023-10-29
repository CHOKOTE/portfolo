import React from 'react'

const Layout = ({children ,classname=''}) => {
  return (
    <div className={`${classname} xl:p-24 lg:p-16 md:p-12 sm:p-8 w-full h-full inline-block bg-light dark:bg-dark p-32`}>
        
        {children}
    </div>
  )
}

export default Layout