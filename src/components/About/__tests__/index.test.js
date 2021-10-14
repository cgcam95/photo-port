import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
     // First Test
  it('renders', () => {                 //In the first argument, a string declares what is being tested. In the second argument, a callback function runs the test.
    render(<About />);
  });
    // Second Test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);           //asFragment function returns a snapshot of the About component
        
        expect(asFragment()).toMatchSnapshot();             // compare whether the expected and actual outcomes match
      });
    });