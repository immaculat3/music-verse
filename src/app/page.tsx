import { LeftSideBar } from "@/components/LeftSideBar";
import { Main } from "@/components/Main";
import { RightSideBar } from "@/components/RightSideBar";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <LeftSideBar />
      <Main />
      <RightSideBar />      
    </div>
  );
}
