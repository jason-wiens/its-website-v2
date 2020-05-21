import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

import { Logo } from '../logo/logo.component';
import { SectionDescription } from '../section-description/section-description.component';

import {
    Container
} from './side-bar-left.styles'

export const LeftSideBar = ( {sectionTitle, logoVersion }) => (
    <Controller>
        <Scene 
            pin={{pushFollowers: true}}
            triggerHook={0}>
            <Container>
                <Logo version={logoVersion} />
                <SectionDescription description={sectionTitle} />
            </Container>
        </Scene>
    </Controller>
)

// export default LeftSideBar;