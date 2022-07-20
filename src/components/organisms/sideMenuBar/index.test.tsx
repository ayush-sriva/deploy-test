import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SideNav from './index';

describe('Side nav organism component', () => {
  it('should render ', () => {
    const wrapper = render(
      <MemoryRouter>
        <SideNav currindex={1}/>
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy;
  });

  it('check all the side nav headings is present', () => {
    const wrapper = render(
      <MemoryRouter>
        {' '}
        <SideNav currindex={1}/>
      </MemoryRouter>
    );
  });
});
