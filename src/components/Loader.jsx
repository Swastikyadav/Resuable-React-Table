import Spinner from "react-js-loader";

function Loader() {
  return (
    <div className="loader">
      <Spinner
        type="spinner-cub"
        bgColor={"#7180bf"}
        title={"Please Wait..."}
        color={"#000"}
        size={100}
      />
    </div>
  );
}

export default Loader;
