/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import { createBlog } from "../../../store/blogSlice";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import STATUSES from "../../globals/status/statuses";

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.blog);
  const handleCreate = (data) => {
    dispatch(createBlog(data));
    if (status === STATUSES.SUCCESS) {
      navigate("/");
    }
  };
  return (
    <Layout>
      <Form type="Create" onSubmit={handleCreate} />
    </Layout>
  );
};

export default AddBlog;