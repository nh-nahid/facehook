import { useAuth } from '../../hooks/useAuth';
import useProfile from '../../hooks/useProfile';
import PostEntry from './PostEntry';

const NewPost = ({ showPostEntry, setShowPostEntry }) => {
    const { auth } = useAuth();
    const { state: profileState } = useProfile(); // get latest profile state

    // If the post belongs to the logged-in user, use profileState.avatar
    const avatarURL = profileState?.user?.avatar
        ? `${import.meta.env.VITE_SERVER_BASE_URL}/${profileState.user.avatar}`
        : `${import.meta.env.VITE_SERVER_BASE_URL}/${auth?.user?.avatar}`;

    return (
        <>
            {showPostEntry ? (
                <PostEntry onCreate={() => setShowPostEntry(false)} />
            ) : (
                <div className="card">
                    <div className="flex-center mb-3 gap-2 lg:gap-4">
                        <img
                            className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
                            src={avatarURL}
                            alt="avatar"
                        />
                        <div className="flex-1">
                            <textarea
                                className="h-16 w-full rounded-md bg-lighterDark p-3 focus:outline-none sm:h-20 sm:p-6"
                                name="post"
                                id="post"
                                placeholder="What's on your mind?"
                                onClick={() => setShowPostEntry(true)}
                            ></textarea>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NewPost;
