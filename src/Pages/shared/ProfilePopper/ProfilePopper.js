// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";
// import useAuth from "../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";
import "./ProfilePopper.css";

const ProfilePopper = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const { user, logOut } = useFirebase();
  console.log(user);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <h3 onClick={handleClick} className="rounded-circle">
        <img
          style={{ borderRadius: "50px", width: "50px" }}
          src={user.photoURL}
          alt=""
        />
      </h3>

      <Overlay show={show} target={target} placement="bottom" container={ref}>
        <Popover id="popover-contained" className="profile__body">
          <Popover.Body>
            <h6>{user.displayName}</h6>
            <p>{user.email}</p>
            <Button onClick={logOut} className="main__button">
              {/* <FontAwesomeIcon icon={faSignOutAlt} /> */}Log Out
            </Button>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};

export default ProfilePopper;
