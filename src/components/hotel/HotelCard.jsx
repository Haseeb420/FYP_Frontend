import React from "react";

function HotelCard(props) {
  return (
    <>
      <div className="card col-md-3 m-2" style={{ width: "18rem" }}>
        <img
          src={"http://127.0.0.1:8000" + props.hotelObj.HotelPicture}
          className="card-img-top"
          alt="someImage"
        />
        <div className="card-body">
          <h5 className="card-title">{props.hotelObj.HotelName}</h5>
          <p
            className="card-text"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props.hotelObj.hotelDescription}
          </p>
          <button
            // href={this.props.url}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}

export default HotelCard;
