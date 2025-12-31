import '../styles/iphone-loading.css';

const IphoneLoading = ({ progress }: { progress: number }) => {

  return (
    <div className='iphone-loading-container'>
      <div className='iphone-loading-filler' style={{ width: `${progress}%` }}>
      </div>
    </div>
  );
}

export default IphoneLoading;