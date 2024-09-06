import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '~/common/layouts';
import { HomePage } from '~/pages/index';

import { routePaths } from '~/routing/constants';

export const RouteList = () => (
    <Routes>
        <Route path={routePaths.home()} element={<Layout />}>
            <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<Navigate to={routePaths.home()} />} />
    </Routes>
);
