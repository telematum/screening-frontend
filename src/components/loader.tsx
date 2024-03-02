import { Blocks } from 'react-loader-spinner';

const BlockLoader = () => {
  return (
    <div className="flex items-center justify-center h-56">
      {' '}
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  );
};
export default BlockLoader;
