import React, { useState } from 'react';
import PostCommentList from './PostCommentList';
import { useAxios } from '../../hooks/useAxios';
import { useAuth } from '../../hooks/useAuth';
import useProfile from '../../hooks/useProfile';

const PostComments = ({ post }) => {
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');
    const { api } = useAxios();
    const { auth } = useAuth();
    const { state: profileState } = useProfile();

    // Use updated avatar from profileState if available
    const avatarURL = profileState?.user?.avatar
        ? `${import.meta.env.VITE_SERVER_BASE_URL}/${profileState.user.avatar}`
        : `${import.meta.env.VITE_SERVER_BASE_URL}/${auth?.user?.avatar}`;

    const addComment = async (e) => {
        if (e.keyCode === 13 && comment?.trim()) {
            try {
                const response = await api.patch(
                    `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/comment`,
                    { comment }
                );

                if (response.status === 200) {
                    setComments(response.data.comments);
                    setComment(''); // clear input
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div>
            <div className="flex-center mb-3 gap-2 lg:gap-4">
                <img
                    className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
                    src={avatarURL}
                    alt="avatar"
                />

                <div className="flex-1">
                    <input
                        type="text"
                        className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
                        name="post"
                        id="post"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        onKeyDown={addComment}
                        placeholder="What's on your mind?"
                    />
                </div>
            </div>

            <PostCommentList comments={comments} />
        </div>
    );
};

export default PostComments;
