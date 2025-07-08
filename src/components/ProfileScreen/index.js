import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDashboard } from "../../DashboardContext";

const ProfileScreen = () => {
  const { profile, setProfile } = useDashboard();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setProfile(data[0]);
    };

    if (!profile) fetchUser();
  }, [profile, setProfile]);

  if (!profile) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate("/")}
        className="text-blue-600 hover:underline text-sm mb-4"
      >
        ← Welcome, {profile.name}
      </button>

      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md flex flex-col md:flex-row gap-8">
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <div className="w-16 h-16 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-xl font-bold">
            {profile.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </div>
          <h3 className="mt-4 text-lg font-semibold">{profile.name}</h3>
          <p className="text-gray-500 text-sm">{profile.email}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-700">
          <div>
            <p className="font-medium text-gray-500">User ID</p>
            <p>{profile.id}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Name</p>
            <p>{profile.name}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Email ID</p>
            <p>{profile.email}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Address</p>
            <p className="truncate">
              {profile.address.street}, {profile.address.city}
            </p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Phone</p>
            <p>{profile.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
