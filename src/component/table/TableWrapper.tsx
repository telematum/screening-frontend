export const TableWrapper = ({
  children,
  elements,
}: {
  children?: React.ReactNode;
  elements?: JSX.Element;
}) => {
  return (
    <div className="w-full mt-10 p-5 bg-gray-100 ">
      <div>{elements}</div>
      <div>{children}</div>
    </div>
  );
};
