import React from 'react'

//header
import Header from '../../components/partials/dashboard/headerStyle/header'

//footer
import Footer from '../../components/partials/dashboard/footerStyle/footer'

//default 
import Layout1Router from '../../router/layout1-router'

const Layout1 = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <Layout1Router />
            </div>
            <Footer />
        </>
    )
}

export default Layout1
