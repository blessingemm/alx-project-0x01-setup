import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className = "bg-blue-600 text-white shadow-md py-4">
      <div className = "container mx-auto flex justify-between items-center px-4">
        <h3 className = "font-bold text-2xl"> <link href="" />Daily Contents</h3>
        <nav>
          <ul className = "flex space-x-6">
            <li className = "hover:underline"> <link href="/pages/posts/index.tsx"/>Posts</li>
            <li className = "hover:underline"> <link href="/pages/users/index.tsx"/>Users</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;