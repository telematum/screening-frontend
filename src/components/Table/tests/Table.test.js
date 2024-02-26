import { render } from "@testing-library/react";
import Table from "../Table";
import { headerData } from "../../../utils/constants/Dashboard.constant";

const mockData = [{
    "patient_name": "John Doe",
    "mobile_number": "123-456-7890",
    "appointment_date": "2024-02-26",
    "appointment_time": "10:00 AM",
    "doctor": "Dr. Smith",
    "injury": "Sprained ankle"
}];

describe("Table component", () => {
    it("should render Table component correctly", () => {
        const { getByText } = render(<Table headerData={headerData} bodyData={mockData} />);
        expect(getByText('Sprained ankle')).toBeInTheDocument();
    });
});