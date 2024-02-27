import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableHeaders } from "../data/AppointmentsData";
import classes from "../styleContainer/Table.module.css";
const UserHead = () => {
  return (
    <TableHead sx={{ backgroundColor: "#EEEDEB" }}>
      <TableRow>
        {TableHeaders.map((item) => (
          <TableCell align="left" key={item.id}>
            <p className={classes.titles}>{item.title.toUpperCase()}</p>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default UserHead;
