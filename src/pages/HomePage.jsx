import React, { useEffect, useState } from 'react';
import { useAxios } from '../hooks/useAxios';
import PostList from '../components/posts/PostList';
import { actions } from '../actions';
import { usePost } from '../hooks/usePost';
import NewPost from '../components/posts/NewPost';

const HomePage = () => {
    const [showPostEntry, setShowPostEntry] = useState(false);
    const {state, dispatch } = usePost()
    const { api } = useAxios();

    useEffect(() => {
        dispatch({type: actions.post.DATA_FETCHING});

        const fetchPost = async () => {
            try {
                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/posts`);

                if(response.status === 200){
                    dispatch({type: actions.post.DATA_FETCHED, data: response.data})
                }
            } catch (error) {
                dispatch({type: actions.post.DATA_FETCH_ERROR, error: error.message})
            }
        }

        fetchPost();
    }, [])
    
    if(state?.loading){
        return <p>We are working...</p>
    }

    if(state?.error){
        return <p>Error occured: {state?.error?.message}</p>
    }
    return (
        <>
        <NewPost showPostEntry={showPostEntry} setShowPostEntry={setShowPostEntry} />
        <PostList posts = {state?.posts} showPostEntry={showPostEntry} setShowPostEntry={setShowPostEntry} />
        </>
    );
};

export default HomePage;