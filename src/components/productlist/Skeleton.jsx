import React from "react";
const Skeleton = ({ columns }) => {
  const skeletonElements = [];

  for (let i = 0; i < columns; i++) {
    skeletonElements.push(
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={i}>
        <div className="card skeleton-loading" style={{ height: "500px", width: "300px" }}>
          <div className="card-img-top skeleton-image"></div>
          <div className="card-body">
            <h5 className="card-title skeleton-text"></h5>
            <p className="card-text skeleton-text" style={{ width: "50%" }}></p>
            <p className="card-text skeleton-text" style={{ width: "50%" }}></p>
            <p className="card-text skeleton-text" style={{ width: "75%" }}></p>
            <p className="card-text skeleton-text" style={{ width: "75%" }}></p>
            <p className="card-text skeleton-text" style={{ width: "100%" }}></p>
            <p className="card-text skeleton-text" style={{ width: "100%" }}></p>
          </div>
        </div>
      </div>
    );
  }

  return <>{skeletonElements}</>;
};

export default Skeleton;
