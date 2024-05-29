import axios from "axios";
import React, { useEffect,createContext, useState } from "react";
import Camera, { IMAGE_TYPES, FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export const UserContext = createContext();

const CameraComponent = () => {
  const [validUser, setValidUser] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const user = useSelector((store) => store.auth.me);
 
  const { sessionId } = useParams();

  const navigate = useNavigate();

  async function handleTakePhoto(dataUri) {
    try {
      const response = await axios.post("http://localhost:8080/process_face", {
        email: user.email,
        img_base64: dataUri,
      });
      setResponseMsg(response.data.message);
      setValidUser(response.data.valid);
      setTimeout(() => {
        navigate(`contracts`);
      }, 4000);
    } catch (error) {
      console.error("Error processing photo:", error);
      setResponseMsg("Error processing photo. Please try again.");
      setValidUser(false);
    }
  }

  return (
    <>
      <Camera
      
        isFullscreen={false}
        onTakePhoto={handleTakePhoto}
        imageType={IMAGE_TYPES.JPG}
        isImageMirror={true}
        idealFacingMode={FACING_MODES.USER}
        style={{ width: "100%" }}
      />
      <div style={{ width: "100%", textAlign: "center" }}>
        {validUser ? (
          <>
            <h1>Valid</h1>
            <h5>{responseMsg}</h5>
          </>
        ) : (
          <>
            <h1>Invalid</h1>
            <h5>{responseMsg}</h5>
          </>
        )}
      </div>
    </>
  );
};

export default CameraComponent;
