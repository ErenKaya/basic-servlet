import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './Main';
import SubMain from './SubMain';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Main} exact={true} />
                <Route path="/LogoutServlet" component={SubMain} />
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;
