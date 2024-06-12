/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/globals/status/statuses";
import API from "../src/http";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    inputData: null,
    status: null,
    deleteStatus: null,
    editStatus: null,
  },
  reducers: {
    setinputData(state, action) {
      state.inputData = action.payload;
    },

    setStatus(state, action) {
      state.status = action.payload;
    },
    setDeleteStatus(state, action) {
      state.deleteStatus = action.payload;
    },
    setEditStatus(state, action) {
      state.editStatus = action.payload;
    },
  },
});
export const { setinputData, setStatus, setDeleteStatus, setEditStatus } =
  blogSlice.actions;
export default blogSlice.reducer;

export const createBlog = (data) => {
  return async function createBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post("blog", data,{
        headers :{
          "Content-Type":"multipart/form-data",
        },
      });
      if (response.status === 201) {
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
};
export function fetchBlog() {
  return async function fetchBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get("blog");
      if (response.status === 200 && response.data.data.length > 0) {
        dispatch(setinputData(response.data.data));
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
export const deleteBlog = (id) => {
  return async function deleteBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.delete(`blog/${id}`);
      if (response.status === 200) {
        dispatch(setDeleteStatus(true));
      } else {
        dispatch(setDeleteStatus(null));
      }
    } catch (error) {
      dispatch(setDeleteStatus(false));
    }
  };
};
export function fetchSingleBlog(id) {
  return async function fetchSingleBlogThunk(dispatch) {
    setStatus(STATUSES.LOADING);
    try {
      const response = await API.get(`blog/${id}`);
      if (response.status === 200) {
        dispatch(setStatus(STATUSES.SUCCESS));
        dispatch(setinputData(response.data.data));
      }
    } catch (error) {
      console.log(error?.res?.data?.message);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export function editBlog(data, id) {
  return async function editBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.patch(`blog/${id}`, data);
      if (response.status === 200) {
        dispatch(setEditStatus(true));
      } else {
        dispatch(setEditStatus(null));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}