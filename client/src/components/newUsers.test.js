import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import '@testing-library/react/cleanup-after-each'

import NewUser from './newUsers.js'


describe('NewUser component', () => {
    it('renders a new user', () => {
        render(<NewUser/>)
    })
    // it('should call the handleclick function passed as prop', () => {
    //     const button = jest.fn();
    
    //     // we pass the mock as a prop
    //     const { getByText } = render( <NewUser button={button} />);
    
    //     // fire the event
    //     fireEvent.click(getByText(/tried it/i));
    
    //     // we can now assert that the function was called
    //     expect(button).toHaveBeenCalled();
    //   });

    it('update the message when speak button is clicked', () => {
        const { getByTestId, queryByText } = render(<NewUser />);
    
        // the text is not there
        expect(queryByText(/awesome/i)).toBeFalsy();
    
        const button = getByTestId(/awesomeBtn/i);
        fireEvent.click(button);
    
        // after clicking the button, the text is there
        expect(queryByText(/awesome/i)).toBeTruthy();
      });
})