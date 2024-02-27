import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppointmentData from "../data/AppointmentsData";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import UserHead from "./TableHead";
import classes from "../styleContainer/Table.module.css";
function UserTable() {
  return (
    <Box className={classes.firstContainer}>
      <Container className={classes.mainContainer} maxWidth="false">
        <Box sx={{ paddingBottom: "1%" }}>
          <p className={classes.firstText}>Today's Appointment List</p>
        </Box>
        <TableContainer className={classes.tableContainer}>
          <Table aria-label="customized table">
            <UserHead />
            <TableBody>
              {AppointmentData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Avatar sizes="small" alt="avatar1" src={item.avatar} />
                    <Box className={classes.patient}>
                      <p className={classes.patientName}>{item.patient_name}</p>
                      <p className={classes.mobileNumber}>
                        {item.mobile_number}
                      </p>
                    </Box>
                  </TableCell>
                  <TableCell align="left">
                    <Box className={classes.commonContainer}>
                      <DateRangeOutlinedIcon />

                      <p className={classes.date}>{item.appointment_date}</p>
                    </Box>
                  </TableCell>
                  <TableCell align="left">
                    <Box className={classes.commonContainer}>
                      <WatchLaterOutlinedIcon />
                      <p className={classes.date}>{item.appointment_time}</p>
                    </Box>
                  </TableCell>
                  <TableCell align="left">
                    <Box className={classes.commonContainer}>
                      <StarsRoundedIcon />
                      <p className={classes.date}>{item.doctor}</p>
                    </Box>
                  </TableCell>
                  <TableCell align="left">
                    <Chip className={classes.date} label={item.injury} />
                  </TableCell>
                  <TableCell align="left">{<MoreVertIcon />}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
export default UserTable;
