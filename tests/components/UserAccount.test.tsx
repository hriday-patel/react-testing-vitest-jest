import UserAccount from "../../src/components/UserAccount";

import { render, screen } from "@testing-library/react";


describe('testing useraccount component', () => {
    it('testing name visible or not' , () => {
        const user = {
            id: 1,
            name: 'Hriday',
            isAdmin: false
        }
        render(<UserAccount user={user}/>);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        const name = screen.getByText(/Hriday/i);
        expect(name).toBeInTheDocument();
    })
    it('button visible or not', () => {
        const user = {
            id: 2,
            name: 'Harsh',
            isAdmin: true
        }
        render(<UserAccount user={user}/>);
        const butt = screen.getByRole('button');
        expect(butt).toBeInTheDocument();
    })
})