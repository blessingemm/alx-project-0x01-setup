import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard'; 
import { UserProps } from '@/interfaces';            

interface UsersProps {
  posts: UserProps[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        {posts.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts
    }
  };
}

export default Users;
