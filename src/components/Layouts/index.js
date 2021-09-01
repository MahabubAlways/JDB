import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './index.scss'

const Layouts = ({path, children}) => {
    return (
        <>
            <Header path={path} />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layouts
