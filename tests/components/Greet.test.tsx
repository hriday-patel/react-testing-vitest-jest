
import {render , screen} from '@testing-library/react'; 
import Greet from '../../src/components/Greet';



describe('testing greet component', () => {
    it('name should be visible when name is passed' , () => {
        render(<Greet name='Hriday'/>)
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/Hriday/i);
    })
    it('login button should be visible if no name is passed' , () => {
        render(<Greet />)
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);
    })
})