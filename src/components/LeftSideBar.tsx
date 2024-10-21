import { RiVoiceprintLine } from "react-icons/ri";
import { RiPlayListFill } from "react-icons/ri";
import { RxBarChart } from "react-icons/rx";

export function LeftSideBar() {
  return (
    <div className="flex flex-col rounded-lg w-1/5 h-screen pl-5 gap-y-10">
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
    </div>
  );
}