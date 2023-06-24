"use client";

import { BeatLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
  return ( 
    <Box className="h-full flex items-center justify-center">
      <BeatLoader color="#784888" size={40} />
    </Box>
  );
}
 
export default Loading;