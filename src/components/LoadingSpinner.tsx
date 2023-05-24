import "../stylesheets/LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-container m-auto max-w-7xl flex justify-center items-center my-60">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
