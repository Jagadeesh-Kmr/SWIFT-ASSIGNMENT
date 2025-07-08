import { useDashboard } from "../../DashboardContext";

const Header = () => {
  const { profile } = useDashboard();

  const initials = profile?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <header className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
      <div className="text-lg font-bold text-green-400">SWIFT</div>
      {profile && (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm font-semibold">
            {initials}
          </div>
          <span className="text-sm text-white">{profile.name}</span>
        </div>
      )}
    </header>
  );
};

export default Header;
