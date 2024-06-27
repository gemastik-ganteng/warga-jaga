import { useAuth } from "@/components/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const PhotoProfileTile = () => {
  const { userData, loading } = useAuth();

  return (
    <>
      <div className="flex gap-4 rounded-sm p-6 shadow-md items-center w-full bg-radial">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-2xl font-bold">{userData?.name}</p>
      </div>
    </>
  );
};

export default PhotoProfileTile;
