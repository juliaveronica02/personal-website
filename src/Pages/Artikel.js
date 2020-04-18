import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Artikel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "http://localhost:8000/artikel";
    axios.get(url).then((res) => {
      const data = res.data;
      setData(res.data);
      console.log(data);
    });
  }, []);
  const showData = data.map((item, index) => (
    <div key={index} className="col pt-4 mt-5 mb-2">
      {/* <div className="col-md-4"> */}
      <div className="card" style={{ width: "20rem" }}>
        <img src={item.ImgURL} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <Link to={`/artikel/${item.id}`} className="btn btn-primary">
            Read More >>
          </Link>
        </div>
      </div>
    </div>
    /* </div> */
  ));
  return (
    <div>
      <div className="container">
        <div className="row">{showData}</div>
      </div>
    </div>
  );
};
export default Artikel;
