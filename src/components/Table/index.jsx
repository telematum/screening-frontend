/* eslint-disable react/no-unescaped-entities */
import EmptyIllustration from '../../assets/EmptyIllustration';
import SpinnerIcon from '../../assets/icons/SpinnerIcon';
import useTable from '../../hooks/useTable';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

// eslint-disable-next-line react/prop-types
const Table = ({ loading, columns, data = [] }) => {
  const { headers, rows } = useTable({ columns, data });
  return (
    <table
      className={`${
        loading || !data.length ? "h-96" : ""
      } relative   border-gray-200 rounded-2xl overflow-hidden`}
    >
      <TableHeader headers={headers} />
      {loading ? (
        <div className="absolute top-0 h-96 left-0 bottom-0 text-slate-900 right-0  w-full flex justify-center items-center z-50">
          <SpinnerIcon className="animate-spin text-slate-500" />
        </div>
      ) : !data.length ? (
        <div className="absolute top-0 h-96 left-0 bottom-0 right-0  w-full flex flex-col justify-center items-center">
          <EmptyIllustration className="mt-20" width={200} height={200} />
          <h3 className="mt-8">
            <span className=" text-slate-800 font-medium">Whoops! </span>
            <span className="text-slate-600 font-light">
              Looks like there's no data.
            </span>
          </h3>
        </div>
      ) : (
        <TableBody loading={loading} key={data} rows={rows} />
      )}
    </table>
  );
};

export default Table;
