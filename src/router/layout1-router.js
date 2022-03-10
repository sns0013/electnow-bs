import React from 'react'

//router
import { Switch,Route } from 'react-router'

//pages
import FriendList from '../views/dashboard/app/friend-list'
import ProfileImages from '../views/dashboard/app/profile-images';
import ProfileVideos from '../views/dashboard/app/profile-videos';
import ProfileEvents from '../views/dashboard/app/profile-events';
import EventDetail from '../views/dashboard/app/event-detail';
import Calendar from '../views/dashboard/app/calendar';

const Layout1Router = () => {
    return (
        <>
            <Switch>
                <Route path="/dashboards/app/friend-list"           component={FriendList} />
                <Route path="/dashboards/app/profile-images"        component={ProfileImages} />
                <Route path="/dashboards/app/profile-videos"        component={ProfileVideos} />
                <Route path="/dashboards/app/profile-events"        component={ProfileEvents} />
                <Route path="/dashboards/app/event-detail"          component={EventDetail} />
                <Route path="/dashboards/app/calendar"              component={Calendar}/>
            </Switch>
        </>
    )
}

export default Layout1Router
