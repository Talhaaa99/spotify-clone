import SideBar from "./Sidebar";
import Body from "./Body.jsx";
import SpotifyWebApi from "spotify-web-api-node";
import { useRecoilState } from "recoil";
import { currentTrackState } from "../Atom/playerAtom";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

function Dashboard() {
  const [currentTrack, setCurrentTrack] = useRecoilState(currentTrackState);

  const chooseTrack = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div className="min-h-screen bg-black pb-24">
      <SideBar />
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
    </div>
  );
}
export default Dashboard;
