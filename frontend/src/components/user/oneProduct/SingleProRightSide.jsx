import React from "react";
import "./SingleProRightSide.css";
import Avatar from "@mui/material/Avatar";

const SingleProRightSide = () => {
  return (
    <>
      <div className="rightSideCont container-fluid">
        <div className="trainerAvatar d-flex mt-5">
          <div className="trainerImg">
            <Avatar
              alt="Remy Sharp"
              src="images/cardimg.jpg"
              sx={{ width: 66, height: 66 }}
            />
          </div>
          <div>
            <h3>Trainer Name</h3>
          </div>
        </div>

        <div className="descriptionContent mt-5">
            <h2>Decription</h2>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>




      </div>
    </>
  );
};

export default SingleProRightSide;
