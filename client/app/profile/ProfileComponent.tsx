import PostCard from "@/components/PostCard";
import { Post } from "@/types/Post";

const ProfileComponent = ({
  profilePicture,
  name,
  username,
  posts,
}: {
  profilePicture: string;
  name: string;
  username: string;
  posts: Post[];
}) => {
  return (
    <div className="flex flex-col items-center gap-6 md:items-start mb-20">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
        <img
          className="w-32 mx-auto rounded-full"
          src={profilePicture}
          alt={username}
        />
        <div className="flex flex-col items-center gap-2 md:items-start">
          <h1 className="text-lg sm:text-2xl font-bold">{name}</h1>
          <span className="text-base text-muted-foreground">{username}</span>
        </div>
      </div>
      <div className="w-full">
        <h4 className="mb-4 text-xl sm:text-2xl font-semibold">Posts</h4>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post: Post) => (
              <PostCard
                key={post.id}
                shareCount={post.shares}
                postId={post.id}
                author={post.author}
                likesCount={post.likes?.length || 0}
                commentsCount={post.comments?.length || 0}
                content={post.content}
                createdAt={post.createdAt}
              />
            ))
          ) : (
            //TODO Add Illustrations
            <p>No posts available</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProfileComponent;
