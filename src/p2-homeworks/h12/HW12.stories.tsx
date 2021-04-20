import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import HW12 from "./HW12";
import {ReduxStoreProviderDecorator} from "../../stories/decorators/ReduxStoreDecorators";
import {themeType} from "./bll/themeReducer";



export default {
    title: 'Example/HW12',
    component: HW12,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;


const Template: Story<themeType> = () =>
    <HW12/>

export const HW12Base = Template.bind({});
HW12Base.args = {};