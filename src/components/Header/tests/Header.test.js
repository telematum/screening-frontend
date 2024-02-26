import { render } from "@testing-library/react";
import Header from "../Header";

describe("Header component", () => {
    it("should render Header component correctly", () => {
        const mockHeadingText = "Test";
        const { getByText} = render(<Header  headingText={mockHeadingText}/>);
        expect(getByText('Test')).toBeInTheDocument();
    });
});