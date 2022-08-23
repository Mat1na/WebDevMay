import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const FetchData = async () => {
    console.log("useEffect test");
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let data = await res.json();
    setDetail(data);
  };

  useEffect(()=>{
    FetchData();
  }, []);

  return (
    <div>
      <h1>Blog Detail {id}</h1>
      <h1>{detail.title}</h1>
    </div>
  );
}

export default BlogDetail;
