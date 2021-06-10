import React from 'react';
import App from './App';
import PostDetails from './components/PostDetails/PostDetails';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

jest.mock('./components/PostDetails/PostDetails');
jest.mock('./components/Navbar/Navbar');
jest.mock('./components/Home/Home');
jest.mock('./components/Auth/Auth');

test("Should render page header and Home on default route", () => {

    Navbar.mockImplementation(() => <div>Navbar</div>);
    Home.mockImplementation(() => <div>Home</div>);
    
    render(
        <MemoryRouter>
          <App/>
        </MemoryRouter>
      );

    expect(screen.getByText("Navbar")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
});




  

  