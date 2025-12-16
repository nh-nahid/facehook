import React, { useEffect, useReducer } from 'react';
import Header from '../components/common/Header';
import { Link } from 'react-router';
import { postReducer } from '../reducers/postReducer';
import { initialState } from '../reducers/ProfileReducer';
import { useAxios } from '../hooks/useAxios';
import PostList from '../components/posts/PostList';
import { actions } from '../actions';

const HomePage = () => {
    const [ state, dispatch ] = useReducer(postReducer, initialState);
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
        <PostList posts = {state?.posts} />
        </>
    );
};

export default HomePage;