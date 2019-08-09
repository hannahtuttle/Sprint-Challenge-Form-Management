import React from 'react';
import {render, fireEvent, waitForElementToBeRemoved} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import '@testing-library/react/cleanup-after-each'

import FormWithFormik from './form.js'


describe('Form.js', () => {
    it('renders without crashing using react dom', () => {
        render(<FormWithFormik/>)
      })

    it('should return the value of h2', () => {
     const title = render(<FormWithFormik />)
     title.getByText(/Registration Form/i)
    })


})