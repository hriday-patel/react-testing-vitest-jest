import { screen, render } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe('testing ProductImageGallery Component' , () => {
    it('testing dom is Empty or not', () => {
        const imageUrls: string[] = [];
        const {container} = render(<ProductImageGallery imageUrls={imageUrls}/>);
        expect(container).toBeEmptyDOMElement();
    })
    it('testing urls', () => {
        const imageUrls: string[] = ['hriday', 'kulin', 'darsh'];
        render(<ProductImageGallery imageUrls={imageUrls} />);
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(3);
        images.map((image, index) => {
            expect(image).toHaveAttribute('src', imageUrls[index]);
        })
    })
})