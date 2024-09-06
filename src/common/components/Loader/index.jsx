import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

import * as SC from './assets/index.styled.js';

export const Loader = () => (
    <SC.Wrap>
        <ThreeDots visible height="80" width="80" color="#E44848" radius="9" ariaLabel="three-dots-loading" />
    </SC.Wrap>
);
