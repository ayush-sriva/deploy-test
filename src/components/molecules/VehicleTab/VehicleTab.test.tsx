import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import VehicleTab from './VehicleTab';

describe('Vehicle Tab component', () => {
  test('Match the snapshot', () => {
    render(<VehicleTab />);
    const vehicleTab = screen.getByTestId('vehicleTab');
    expect(vehicleTab).toBeTruthy();
  });
});
