import React, { ComponentProps } from "react";
import s from "./Table.module.scss";
import clsx from "clsx";

type TableCellProps = ComponentProps<"th"> & {
  ishead?: boolean;
  align?: "left" | "right" | "center" | "justify";
};

export const TableCell = ({
  align = "center",
  ishead,
  className,
  ...props
}: TableCellProps) => {
  return (
    <>
      {ishead ? (
        <th className={clsx(s.cell, className && className)} {...props} />
      ) : (
        <td className={clsx(s.cell, className && className)} {...props} />
      )}
    </>
  );
};

export default TableCell;