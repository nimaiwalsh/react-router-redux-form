import axios from 'axios';
//API request - fetch the list of blog posts and serve up to PostsIndex.js
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'nims123';

export function fetchPosts() {
  const request = axios.get(`${API_URL}/posts?key=${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

//API posts - post the content
export function createPost(values) {
  const request = axios.post(`${API_URL}/posts?key=${API_KEY}`, values)
  return {
    type: CREATE_POST,
    payload: request
  }
}