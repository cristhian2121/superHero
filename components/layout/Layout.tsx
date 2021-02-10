import React from 'react'
import Navbar from '../Navbar'

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer>This is teh footer</footer>
        </div>
    )
}

export default Layout
