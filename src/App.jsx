import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RouteList } from '~/routing/components';

const App = () => (
    <BrowserRouter basename="/Foodies-Front">
        <RouteList />
    </BrowserRouter>
);

export default App;
