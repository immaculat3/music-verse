import { RiVoiceprintLine } from "react-icons/ri";
import { RiPlayListFill } from "react-icons/ri";
import { RxBarChart } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPodcast } from "react-icons/fa";
import { Dot } from "./Dot";

export function LeftSideBar() {
  return (
    <div className="flex flex-col rounded-lg w-1/5 h-screen pl-7 gap-y-10">
      <div>
        <h1 className="pt-5">Music Verse</h1>
      </div>
      <div className="flex flex-col gap-y-5">
        <button className="flex items-center">
          <RiVoiceprintLine className="mr-2" />
          <span>Feed</span>
        </button>
        <button className="flex items-center">
          <RiPlayListFill className="mr-2" />
          <span>Playlists</span>
        </button>
        <button className="flex items-center">
          <RxBarChart className="mr-2" />
          <span>Statistics</span>
        </button>
      </div>
      <div className="flex flex-col gap-y-5">
        <span className="text-xs uppercase">Your Music</span>
        <button className="flex items-center">
          <FaRegHeart className="mr-2" />
          <span>Favorites</span>
        </button>
        <button className="flex items-center">
          <GoClock className="mr-2" />
          <span>Listen Later</span>
        </button>
        <button className="flex items-center">
          <FaCalendarAlt className="mr-2" />
          <span>History</span>
        </button>
        <button className="flex items-center">
          <FaPodcast className="mr-2" />
          <span>Podcasts</span>
        </button>
      </div>
      <div className="flex flex-col gap-y-5">
        <span className="text-xs uppercase">Your Playlists</span>
        <button className="flex items-center">
          <Dot color="red" />
          <span>Metacore</span>
        </button>
        <button className="flex items-center">
          <Dot color="green" />
          <span>Electro</span>
        </button>
        <button className="flex items-center">
          <Dot color="blue" />
          <span>Funk</span>
        </button>
        <button className="flex items-center">
          <Dot color="yellow" />
          <span>Disco</span>
        </button>
      </div>
    </div>
  );
}
