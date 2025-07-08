import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CommentsDashboard = () => {
  const [comments, setComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      setComments(data);
    };
    fetchComments();
  }, []);

  const filtered = comments.filter(
    (comment) =>
      comment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Comments Dashboard</h1>

      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search by name or email"
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-2/3"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />

        <select
          className="border border-gray-300 rounded px-3 py-2"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value={10}>10 / page</option>
          <option value={50}>50 / page</option>
          <option value={100}>100 / page</option>
        </select>
      </div>

      <div className="overflow-x-auto shadow border border-gray-200 rounded">
        <table className="min-w-full bg-white text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-3 border-b">Post ID</th>
              <th className="px-4 py-3 border-b">Name</th>
              <th className="px-4 py-3 border-b">Email</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((comment) => (
              <tr key={comment.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{comment.postId}</td>
                <td className="px-4 py-2 border-b">{comment.name}</td>
                <td className="px-4 py-2 border-b">{comment.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {[...Array(totalPages).keys()].map((i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded border ${
              currentPage === i + 1
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <button
          className="text-blue-600 hover:underline"
          onClick={() => navigate("/profile")}
        >
          Go to Profile →
        </button>
      </div>
    </div>
  );
};

export default CommentsDashboard;
