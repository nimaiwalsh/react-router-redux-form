import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'nims123';

//API request - fetch the list of blog posts and serve up to PostsIndex.js
export function fetchPosts() {
  const request = axios.get(`${API_URL}/posts?key=${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

//API posts - post the content
export function createPost(values, callback) {
  const request = axios.post(`${API_URL}/posts?key=${API_KEY}`, values)
    .then(() => callback())
  return {
    type: CREATE_POST,
    payload: request
  }
}

//Fetch one particular post
export function fetchPost(id) {
  const request = axios.get(`${API_URL}/posts/${id}?key=${API_KEY}`)
  return {
    type: FETCH_POST,
    payload: request
  }
}