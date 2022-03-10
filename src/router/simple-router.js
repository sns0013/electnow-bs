import React from 'react'
import {Switch,Route} from 'react-router-dom'

// errors
import Error404 from '../views/dashboard/errors/error404'
import Error500 from '../views/dashboard/errors/error500'

//extrpages
import Maintenance from '../views/dashboard/extrapages/maintenance'
import ComingSoon from '../views/dashboard/extrapages/comingsoon'

const SimpleRouter = () => {
    return (
        <>
            <Switch>                
                {/* error */}
                <Route  path="/errors/error404"                 component={Error404}/>  
                <Route  path="/errors/error500"                 component={Error500}/>

                {/* extra-pages */}
                <Route  path="/extra-pages/pages-maintenance"   component={Maintenance}/>
                <Route  path="/extra-pages/pages-comingsoon"    component={ComingSoon}/>
                
            </Switch>       
        </>
    )
}

export default SimpleRouter
