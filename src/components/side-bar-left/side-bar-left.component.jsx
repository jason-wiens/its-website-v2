import React from 'react';

import './side-bar-left.styles.scss'

import MainLogo from '../main-logo/main-logo.component';
import SectionDescription from '../section-description/section-description.component';

const LeftSideBar = () => (
    <div className='side-bar-left'>
        <MainLogo />
        <SectionDescription />
    </div>
)

export default LeftSideBar;