import React, { ComponentProps } from "react";
import s from "./Table.module.scss";
import clsx from "clsx";

export const TableRow = ({
  className,
  enableDivider,
  ...props
}: { enableDivider?: boolean } & ComponentProps<"tr">) => {
  return (
    <tr
      className={clsx(
        s.row,
        className && className,
        enableDivider && s.endbleDividerRow
      )}
      {...props}
    />
  );
};

export default TableRow;