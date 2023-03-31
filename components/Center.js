import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "@/atom/playlistAtom";
import useSpotify from "@/hooks/useSpotify";
const colors = [
  "from-indingo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];
const Center = () => {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
      })
      .catch((err) => console.log("something went wrong", err));
  }, [spotifyApi, playlistId]);
console.log(playlist);
  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="text-white flex items-center space-x-3 bg-black opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            src={session?.user.image}
            className="rounded-full h-10  w-10"
            width={50}
            height={50}
            alt="user_image"
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`flex items-center space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8 `}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="shadow-2xl w-56 h-56 object-cover mr-4"
              src={playlist?.images?.[0]?.url}
              alt="playlistImage"
            />
          </div>
          <div className="flex-grow flex flex-col tracking-wider leading-10">
            <p>playlist</p>
            <h1 className="text-2xl md:text-3xl xl:text-6xl font-bold">
              {playlist?.name}
            </h1>
            <p className="xl:mt-5 text-sm font-semibold">{playlist?.owner.display_name}.{playlist?.followers.total}likes.{playlist?.tracks.total}songs, time</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Center;
