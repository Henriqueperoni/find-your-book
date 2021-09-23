import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Loading = () => {
  return (
    <div className="loader">
      <div>
        <BeatLoader color={"#699ff5"} size={30} />
      </div>
    </div>
  );
};

export default Loading;
