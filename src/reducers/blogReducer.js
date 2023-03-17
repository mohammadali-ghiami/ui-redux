import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { createBlog, deleteBlog, getAllBlogs } from "../../public/services";

export const getBlogsApi = createAsyncThunk("/blogs/getBlogsApi", async () => {
    const response = await getAllBlogs();
    return response.data;
})

export const createBlogApi = createAsyncThunk("/blogs/createBlogApi", async (blog) => {
    const response = await createBlog(blog);
    return response.data;
})

export const deleteBlogApi = createAsyncThunk("/blogs/deleteBlogApi", async (blogId) => {
    await deleteBlog(blogId);
    return blogId;
})

const adaptor = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = adaptor.getInitialState({
    status: "idle"
});


const blogSlice = createSlice({
    name: "blogs",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getBlogsApi.fulfilled, (state, action) => {
                state.status = "fulfilled"
                adaptor.setAll(state, action.payload)
            })
            .addCase(createBlogApi.fulfilled, (state, action) => {
                adaptor.addOne(state, action.payload)
            })
            .addCase(deleteBlogApi.fulfilled, (state, action) => {
                adaptor.removeOne(state, action.payload)
            })
    }
})

export const { selectAll, selectById, selectIds } = adaptor.getSelectors(state => state.blogs)

export default blogSlice.reducer;