import { screen, render, getByRole } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe('testing terms and conditions' , () => {
    it('should render', () => {
        render(<TermsAndConditions />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Terms & Conditions')

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();

        const butt = screen.getByRole('button', {name : 'Submit'});
        expect(butt).toBeDisabled();
    })
    it('enable submit button' , async () => {
        render(<TermsAndConditions />);
        const checkbox = screen.getByRole('checkbox');
        const prop = userEvent.setup();
        await prop.click(checkbox);
        const butt = screen.getByRole('button');
        expect(butt).toBeEnabled();
    })
})