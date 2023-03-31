import { playlistState } from "@/atom/playlistAtom"
import { useRecoilValue } from "recoil"

const Songs = () => {
  const playlist = useRecoilValue(playlistState)
    return (
    <div className="text-white">
        {playlist?.tracks.items.map((track)=>{
                {track.track.name}
        })}

    </div>
  )
}

export default Songs