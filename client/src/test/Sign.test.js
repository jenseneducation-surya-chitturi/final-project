import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Auth from '../components/Auth/Auth';
import { act } from 'react-dom/test-utils';

describe('Signin', () => {
    describe('with valid inputs', () =>{
        it('calls the onSubmit function', async () => {
           const mockOnSubmit = jest.fn()
 });
         //  const {getByLabelText, getByRole} = render(<Auth onSubmit={mockOnSubmit} />)

        //  await act(async () => {
        //      fireEvent.change(getByLabelText('First Name'), {target: {value: 'surya'}})
        //      fireEvent.change(getByLabelText('Last Name'), {target: {value: 'chitturi'}})
        //  })
        //  await act(async () => {
        //      fireEvent.click(getByRole('button'))
        //  })
    //      expect(mockOnSubmit).toHaveBeenCalled()
    //     })
     })


 })



