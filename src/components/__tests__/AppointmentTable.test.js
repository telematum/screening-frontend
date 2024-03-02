import { render, screen, within } from '@testing-library/react';
import { AppointmentTable } from '../AppointmentTable';
import { AppointmentMock } from '../../mocks/appointmentMock';

const TableColumns = ['Patients', 'Date', 'Time', 'Doctor', 'Injury', 'Action'];
const rowData = ['John Doe', '2024-02-26', '10:00 AM', 'Dr. Smith', 'Sprained ankle'];

describe('AppointmentTable component', () => {
  test('should render heading for appointment list', () => {
    render(<AppointmentTable appointments={[]} />);
    screen.getByText("Today's Appointment List");
  });

  test.each(TableColumns)('should render table colums', (column) => {
    render(<AppointmentTable appointments={[]} />);
    const head = screen.getAllByRole('columnheader');
    expect(head[TableColumns.indexOf(column)].textContent).toContain(column.toUpperCase());
  });

  test('should render correct number of rows', () => {
    render(<AppointmentTable appointments={AppointmentMock} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(4);
  });

  test.each(rowData)('should render correct data in colums', (columnText) => {
    render(<AppointmentTable appointments={AppointmentMock} />);
    const rowOne = screen.getAllByRole('row')[1];
    const columns = within(rowOne).getAllByRole('cell');
    expect(columns).toHaveLength(6);
    const idx = rowData.indexOf(columnText);
    expect(columns[idx]).toHaveTextContent(columnText);
  });
});
