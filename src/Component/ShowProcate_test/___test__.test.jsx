import { render, screen } from '@testing-library/react';
import { Showprocate } from "../Showprocate";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import 'intersection-observer';
import { useSelector } from 'react-redux';


// Mocking react-redux
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));




describe("Showprocate", () => {
  it("show if Card lode", async () => {


    const Showpdcte = (
      <BrowserRouter>
        <Showprocate />
      </BrowserRouter>
    );

    render(Showpdcte);
    const ElementCard = await screen.findAllByTestId("card");
    expect(ElementCard.length).toBe(1); 
  });
});
