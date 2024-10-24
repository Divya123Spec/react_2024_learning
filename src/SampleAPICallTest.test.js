import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // for extended matchers
import SampleAPICallTest from './SampleAPICallTest';


// Mocking the fetch API globally
global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ message: 'Hello, Divya!' }),
    })
  );

  describe('SampleAPICallTest  API call tests',()=>{
    afterEach(() =>{
        jest.clearAllMocks(); // Clear mocks between tests
        jest.resetAllMocks(); // Reset the mock implementations

    });


    test('render loading state intially',() =>{
        render(<SampleAPICallTest/>);
        // Initially, it should show a loading message
        const loadingEle = screen.getByText('Loading...');
        expect(loadingEle).toBeInTheDocument();
    });

    test('render fetched data after API call', async () => {
       render(<SampleAPICallTest/>);

       await waitFor(() => {
        const dataElement = screen.getByText('Hello, Divya!');
        expect(dataElement).toBeInTheDocument();
      });
    });

    test('render erro messgae when API call fails', async () =>{
        fetch.mockImplementationOnce(() => 
            Promise.reject(new Error('API is down'))
        );
        render(<SampleAPICallTest/>)

        // wait for the errror to be shown
        await waitFor(() =>{
            const errorEle = screen.getByText('Error fetching data');
            expect(errorEle).toBeInTheDocument();
        });
        });
    });

