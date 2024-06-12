import React, { useEffect } from "react";

import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlog } from "../../../store/blogSlice";
import Spinner from "./components/spinner/Spinner";

const Home = () => {
  const dispatch = useDispatch();
  const { inputData} = useSelector((store) => store.blog);
  console.log(inputData);

  useEffect(() => {
    dispatch(fetchBlog());
  }, []);

  return (
    <Layout>
      <div className="flex flex-wrap justify-center space-x-5 mt-6">
        {inputData && inputData.length > 0 ? (
          inputData.map((data) => {
            return <Card data={data} />;
          })
        ) : (
          <Spinner />
        )}
      </div>
    </Layout>
  );
};

export default Home;