import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";
import { useSession, signOut, getSession } from "next-auth/react";
const Sidebar = () => {
  const { data: session, status } = useSession();
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <HomeIcon className="h-5 w-5" />
          <p className="">Logout</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p className="">Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p className="">Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* playlist */}
        <p className="hover:text-white cursor-pointer">Playlist...</p>
        <p className="hover:text-white cursor-pointer">Playlist...</p>
        <p className="hover:text-white cursor-pointer">Playlist...</p>
        <p className="hover:text-white cursor-pointer">Playlist...</p>
        <p className="hover:text-white cursor-pointer">Playlist...</p>
        <p className="hover:text-white cursor-pointer">Playlist...</p>
        <p className="hover:text-white cursor-pointer">Playlist...</p>
      </div>
    </div>
  );
};

export default Sidebar;
