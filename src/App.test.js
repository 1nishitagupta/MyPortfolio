import React from 'react';
import {render , screen} from '@testing-library/react'

import Banner from './Components/Banner'
import Navbar from './Components/Navbar';
import Home from './Home';
import { iteratorSymbol } from 'immer/dist/internal';

test('Render List Items', () => { 
    render(<Banner/>);
    expect(screen.getByRole("heading")).toHaveTextContent(/hi !!/);
 })
