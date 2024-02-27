import React from "react";

const ProfilePicture = (props) => {
    const {profilePictures} = props;
  return (
    <>
      {profilePictures.map((item) => {
        return (
          <img
            key={item}
            className="w-11 h-11 rounded-full"
            src={item.picture.thumbnail}
          />
        );
      })}
    </>
  );
};

export default ProfilePicture;
