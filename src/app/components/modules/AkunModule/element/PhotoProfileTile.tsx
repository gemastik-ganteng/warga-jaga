import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const PhotoProfileTile = () => {
  return (
    <>
      <div className="flex gap-4 rounded-sm p-6 shadow-md items-center w-full bg-radial">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-2xl font-bold">Shadiq Alatas</p>
      </div>
    </>
  );
};

export default PhotoProfileTile;
