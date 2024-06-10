import { useState } from "react";
import PhotoProfileTile from "../element/PhotoProfileTile";
import ProfileInfoTile from "../element/ProfileInfoTile";

const ProfileSection = () => {
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <div className="flex flex-col items-center mx-4">
        <PhotoProfileTile />
        <div className="w-full flex flex-col mt-4 gap-3">
          <ProfileInfoTile value="Miraloves@gmail.com" src="./envelope.svg"/>
          <ProfileInfoTile value="08123456789" src="./phone.svg"/>
          <ProfileInfoTile value={password} src="./key.svg" password={true} placeholder="Ubah Password" onchange={setPassword}/>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
