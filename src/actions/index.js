import axios from 'axios';
//API request - fetch the list of blog posts and serve up to PostsIndex.js
export const FETCH_POSTS = 'FETCH_POSTS';
const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'nims123';

export function fetchPosts () {
  const request = axios.get(`${API_URL}/posts?key=${API_KEY}`)
  console.log(request)
  return {
    type: FETCH_POSTS,
    payload: request
  };
}