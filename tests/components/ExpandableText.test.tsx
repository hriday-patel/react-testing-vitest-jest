import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";


describe('testing expandable text component', () => {
    const renderComponent = () => {
        const 
        render(<ExpandableText text/>)
    }
    it('testing button and para', () => {
        const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora veniam assumenda officia veritatis reprehenderit quisquam hic non magni quis, cupiditate delectus dolores, excepturi voluptate aut. Atque quia possimus fuga, sint pariatur necessitatibus harum aliquid molestias veniam culpa tempora repellat nam aperiam exercitationem officiis provident, animi vitae, non qui? Aut placeat nam libero reiciendis tempora maxime laboriosam similique ex aperiam eveniet. Rem commodi, ex ut neque dolorum corrupti numquam iure odio sint modi, sit beatae aliquid, eius repellendus nulla nihil cupiditate recusandae vitae aliquam accusantium deserunt amet architecto! Ut debitis, eaque quidem fugiat culpa alias earum! Suscipit quia vero minima modi."
        render(<ExpandableText text={lorem}/>)
        const str = lorem.substring(0, 255)+'...';
        const para = screen.queryByText(str);
        expect(para).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
    it('testing para with button', async () => {
        const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora veniam assumenda officia veritatis reprehenderit quisquam hic non magni quis, cupiditate delectus dolores, excepturi voluptate aut. Atque quia possimus fuga, sint pariatur necessitatibus harum aliquid molestias veniam culpa tempora repellat nam aperiam exercitationem officiis provident, animi vitae, non qui? Aut placeat nam libero reiciendis tempora maxime laboriosam similique ex aperiam eveniet. Rem commodi, ex ut neque dolorum corrupti numquam iure odio sint modi, sit beatae aliquid, eius repellendus nulla nihil cupiditate recusandae vitae aliquam accusantium deserunt amet architecto! Ut debitis, eaque quidem fugiat culpa alias earum! Suscipit quia vero minima modi."
        render(<ExpandableText text={lorem}/>)
        const str = lorem.substring(0, 255)+'...';
        const para = screen.queryByText(str);
        expect(para).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveTextContent(/Show More/i);
        const prop = userEvent.setup();
        await prop.click(screen.getByRole('button'));
        const para2 = screen.queryByText(lorem);
        expect(para2).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveTextContent(/Show less/i);
    })
    it('testing button and para with short text', () => {
        const lorem = "Short Text"
        render(<ExpandableText text={lorem}/>)
        const str = lorem;
        const para = screen.queryByText(str);
        expect(para).toBeInTheDocument();
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    })
})