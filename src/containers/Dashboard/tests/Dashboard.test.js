import { render } from "@testing-library/react";
import Dashboard from "../Dashboard";

describe("Dashboard component", () => {
    it("should render Dashboard component correctly", () => {
        const { container } = render(<Dashboard />);
        expect(container.querySelector('.mx-5')).toBeInTheDocument();
    });
});