import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import '@testing-library/react/cleanup-after-each'

import NewUser from './newUsers.js'


describe('NewUser component', () => {
    it('renders a new user', () => {
        render(<NewUser/>)
    })
})