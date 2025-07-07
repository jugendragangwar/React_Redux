import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../../features/user/userDetailSlice";

const index = () => {
    const dispatch = useDispatch();

    const { users, loading, error } = useSelector((state) => state.app);
  
  
    useEffect(() => {
      dispatch(showUser());
    }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <h1 className="text-2xl font-bold mb-4">User Posts</h1>

    {loading && <p className="text-blue-500">Loading...</p>}
    {error && <p className="text-red-500">Error: {error}</p>}

    <div className="grid gap-4">
      {users.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
        >
          <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
          <p className="text-gray-600 mt-2 whitespace-pre-line">{post.body}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default index