import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const url = "http://localhost:8000/artikel";
    axios.get(`${url}/${id}`).then((res) => {
      const data = res.data;
      setData(data);
      console.log(data);
    });
  }, [id]);
  const showData = (
    <div className="col  pt-4 mt-5 ml-5 mb-2">
      <div className="card" style={{ width: "18rem" }}>
        <img src={data.ImgURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <div className="container">
        <div className="row">{showData}</div>
      </div>
    </div>
  );
};
export default Detail;
