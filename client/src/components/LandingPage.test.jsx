import LandingPage from "./LandingPage";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter, Link } from "react-router-dom";
 

describe('Landing Page component test', () => {

    test('renders content', () => {

        const component = render(<BrowserRouter><LandingPage /></BrowserRouter>);   
        expect(component.container).toHaveTextContent('What do you like to cook?What type of recipes do you need?You are in the right place!');
    });

    test(`'Let's go !' button should de working`, () => {
        const component = render(<BrowserRouter><LandingPage /></BrowserRouter>);          

        expect(component.getByRole('button')).not.toBeDisabled()
    });   

    test(`When clicking 'Let's go !' button should take you to Home`, () => {
        let component = render(<BrowserRouter><LandingPage /></BrowserRouter>)
    
        const link = component.getByRole('link', { name: `Let's go !` });
        expect(link.getAttribute('href')).toBe('/home');
        
      });

});


