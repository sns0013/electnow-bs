import React from 'react'

//header
import Header from '../../components/partials/dashboard/headerStyle/header'

//footer
import Footer from '../../components/partials/dashboard/footerStyle/footer'

//default 
import DefaultRouter from '../../router/default-router'


const Default = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <div id="content-page" className="content-page">
                    <DefaultRouter/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Default
