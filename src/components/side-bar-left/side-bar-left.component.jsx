import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

import './side-bar-left.styles.scss'

import Logo from '../logo/logo.component';
import SectionDescription from '../section-description/section-description.component';

const LeftSideBar = ( {sectionTitle, logoVersion }) => (
    <Controller>
        <Scene 
            pin={{pushFollowers: true}}
            triggerHook={0}>
            <div className='container'>
                <Logo version={logoVersion} />
                <SectionDescription description={sectionTitle} />
            </div>
        </Scene>
    </Controller>
)

export default LeftSideBar;