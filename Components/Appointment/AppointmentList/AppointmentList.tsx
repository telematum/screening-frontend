import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/Components/Table";

const data = [
    {
      "patient_name": "John Doe",
      "mobile_number": "123-456-7890",
      "appointment_date": "2024-02-26",
      "appointment_time": "10:00 AM",
      "doctor": "Dr. Smith",
      "injury": "Sprained ankle"
    },
    {
      "patient_name": "Jane Smith",
      "mobile_number": "987-654-3210",
      "appointment_date": "2024-02-26",
      "appointment_time": "11:30 AM",
      "doctor": "Dr. Johnson",
      "injury": "Back pain"
    },
    {
      "patient_name": "Michael Johnson",
      "mobile_number": "456-789-0123",
      "appointment_date": "2024-02-26",
      "appointment_time": "1:00 PM",
      "doctor": "Dr. Lee",
      "injury": "Headache"
    },
    {
      "patient_name": "Emily Davis",
      "mobile_number": "789-012-3456",
      "appointment_date": "2024-02-26",
      "appointment_time": "2:30 PM",
      "doctor": "Dr. Patel",
      "injury": "Sore throat"
    },
    {
      "patient_name": "David Wilson",
      "mobile_number": "321-654-9870",
      "appointment_date": "2024-02-26",
      "appointment_time": "4:00 PM",
      "doctor": "Dr. Garcia",
      "injury": "Fever"
    },
    {
      "patient_name": "Sarah Brown",
      "mobile_number": "654-321-0987",
      "appointment_date": "2024-02-26",
      "appointment_time": "5:30 PM",
      "doctor": "Dr. Kim",
      "injury": "Cough"
    }
  ];

const keys = ['PATIENTS', 'DATE', 'TIME', 'DOCTOR', 'INJURY', 'ACTION']

export default function AppointmentList() {
  return (
    <Table>
      <TableHead>
        <TableRow>
            {keys.map((item, i)=><TableCell key={i}><label className="text-grayShade-5 text-base font-normal">{item}</label></TableCell>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={i}>
            <TableCell>
                <label>{row.patient_name}</label>
              </TableCell>
              <TableCell>
                <label>{row.appointment_date}</label>
              </TableCell>
              <TableCell>
                <label>{row.appointment_time}</label>
              </TableCell>
              <TableCell>
                <label>{row.doctor}</label>
              </TableCell>
              <TableCell>
                <label>{row.injury}</label>
              </TableCell>
              <TableCell>
              </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
