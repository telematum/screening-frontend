import React, { ComponentProps } from "react";
import s from "./Table.module.scss";
import clsx from "clsx";

export type TableProps = ComponentProps<"table"> & {
  sticky?: boolean;
  fixed?: boolean;
  enableDivider?: boolean;
};

export const Table = ({
  className,
  ...props
}: TableProps) => {
  return (
    <table
      className={clsx(
        s.table,
        className && className,
      )}
      {...props}
    />
  );
};

export default Table;