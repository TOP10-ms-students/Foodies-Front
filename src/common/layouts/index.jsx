import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '~/common/components/index';

import { LayoutFooter } from './LayoutFooter';
import { LayoutHeader } from './LayoutHeader';

export const Layout = () => (
    <>
        <LayoutHeader />
        <div className="main">
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
        <LayoutFooter />
    </>
);
