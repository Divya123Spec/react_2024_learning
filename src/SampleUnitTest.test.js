import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleUnitTest from './SampleUnitTest';
import { act } from 'react';

describe('SampleUnitTest', () => {
  // Test case 1: Check if "Penny" is rendered initially
  test('renders Penny text', () => {
    render(<SampleUnitTest />);
    const pennyText = screen.getByText('Penny');
    expect(pennyText).toBeInTheDocument();
  });

  // Test case 2: Test the button click and state change
  test('Onclick when the button is clicked', () => {
    const handleClick = jest.fn();
    
    render(<SampleUnitTest onClick={handleClick} />);

    // Find the button element
    const button = screen.getByText('Click me');

    // Simulate the button click inside act to handle state updates
    act(() => {
      fireEvent.click(button);
    });

    // Assert that the handleClick function was called
    expect(handleClick).toHaveBeenCalledTimes(1);

    // Check that the text changed to "Button Clicked!"
    const clickedText = screen.getByText('Button Clicked!');
    expect(clickedText).toBeInTheDocument();
  });

//   Test case 3: test text is rendered or not
    test('renders the text "My Name is Divya"', () => {
    // Render your component
    render(<SampleUnitTest />);

    // Check if the text "My Name is Divya" is present
    const textElement = screen.getByText('My Name is Divya');
    expect(textElement).toBeInTheDocument();
  });

  test('render the text "Divya"',() =>{
   render(<SampleUnitTest/>) ;
   const textEle = screen.getByText('Divya');
   expect(textEle).toBeInTheDocument();
  });
});


// A basic test in Jest is written using the following methods:

// describe(): Groups together related tests.
// test() or it(): Defines a single test.
// expect(): Sets up assertions to check expected outcomes.
// beforeEach() / afterEach(): Set up or clean up conditions before or after each test.


// Explanation:
// render(): Renders the component in a virtual DOM for testing.
// screen.getByText(): Finds the element that contains specific text.
// expect(): Asserts that the button is rendered (toBeInTheDocument()) and that the click event has been fired.
// fireEvent.click(): Simulates a click event on the rendered element.
// jest.fn(): Creates a mock function to check if it has been called (useful for event handlers).