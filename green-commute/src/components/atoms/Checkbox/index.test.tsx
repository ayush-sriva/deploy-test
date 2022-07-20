
import React from 'react';
import {render, screen} from '@testing-library/react';

import  CheckBoxComponent  from '.';

describe('Atoms', () => {
    test('renders input field', () => {
        render(<CheckBoxComponent label={"Fresher"} labelChecked={false}/>);
        //screen.getByRole("");
        expect(screen.getByRole("checkbox")).toBeInTheDocument();
        expect(screen.getByText("Fresher")).toBeInTheDocument();
        expect(screen.getByTestId("SVGIcon")).toBeTruthy();
        
    })
});