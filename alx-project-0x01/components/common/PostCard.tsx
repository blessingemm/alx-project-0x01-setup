import React from 'react';

interface PostCardProps {
  title: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default PostCard;
