import React, { ComponentProps } from "react";
import s from "./Table.module.scss";

type TableBodyProps = ComponentProps<"tbody">;

export const TableBody = (props: TableBodyProps) => (
  <tbody className={s.tbody} {...props} />
);

export default TableBody;