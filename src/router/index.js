import React from 'react'


//router
import { Switch,Route } from 'react-router'

//layoutpages
import Default from '../layouts/dashboard/default' 
import Layout1 from '../layouts/dashboard/layout-1'   
import Simple from '../layouts/dashboard/simple'

const IndexRouters = () => {
    return (
        <>
            <Switch>
                <Route  path="/errors"                  component={Simple}></Route>
                <Route  path="/extra-pages"             component={Simple}></Route>
                <Route  path="/dashboards"              component={Layout1}></Route>
                <Route  path="/"                        component={Default}></Route>
            </Switch>
        </>
    )
}

export default IndexRouters
