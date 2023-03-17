import axios from "axios"

const PUBLIC_URL = "http://localhost:9000/blogs"

export const getAllBlogs = () => {
    return axios.get(PUBLIC_URL)
}

export const getBlog = (blogId) => {
    return axios.get(`${PUBLIC_URL}/${blogId}`)
}

export const createBlog = (blog) => {
    return axios.post(PUBLIC_URL, blog)
}

export const deleteBlog = (blogId) => {
    return axios.delete(`${PUBLIC_URL}/${blogId}`)
}

export const editBlog = (blogId, blog) => {
    return axios.put(`${PUBLIC_URL}/${blogId}`, blog)
}