import React from 'react';
import PostCard from './PostCard';
import NewPost from './NewPost';

const PostList = ({ posts, showPostEntry, setShowPostEntry }) => {
    return (
        <>
        {showPostEntry ? (<NewPost/>) : (posts && posts.map(post => (
            <PostCard key={post.id} post={post} showPostEntry={showPostEntry} setShowPostEntry={setShowPostEntry}/>
        )))}
        </>
    );
};

export default PostList;