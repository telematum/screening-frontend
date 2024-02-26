import React, { ComponentProps, cloneElement } from "react";
import s from "./Table.module.scss";

export const TableHead = ({ children, ...props }: ComponentProps<"thead">) => {
  const childrenWithAdjustedProps = React.Children.map(children, (child: any) =>
    cloneElement(child, { ishead: "true" })
  );

  return (
    <thead className={s.head} {...props}>
      {childrenWithAdjustedProps}
    </thead>
  );
};

export default TableHead;