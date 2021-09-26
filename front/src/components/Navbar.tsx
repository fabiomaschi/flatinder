import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Image, Menu } from "semantic-ui-react";
import { AppLogo } from "../assets";

const Navbar = ({
  isAuth,
  setIsAuth,
}: {
  isAuth: boolean;
  setIsAuth: Function;
}) => {
  // TODO add actual own id
  const id = 1;

  const logOut = (e: any) => {
    e.preventDefault();
    setIsAuth(false);
  };

  return (
    <Menu style={{ marginBottom: 0 }}>
      <Menu.Item as={NavLink} exact to={"/"} name={"front"}>
        <Image src={AppLogo} size={"tiny"} />
      </Menu.Item>

      {isAuth ? (
        <>
          <Menu.Item as={NavLink} exact to={"/feed"} name={"feed"}>
            Feed
          </Menu.Item>
          <Menu.Item as={NavLink} exact to={"/matches"} name={"matches"}>
            Matches
          </Menu.Item>
          <Menu.Item as={NavLink} exact to={`/user/${id}`} name={"my-profile"}>
            My Profile
          </Menu.Item>
          <Menu.Item as={Button} onClick={logOut}>
            Log out
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item as={NavLink} exact to={"login"} name={"login"}>
            Login
          </Menu.Item>
          <Menu.Item as={NavLink} exact to={"signup"} name={"signup"}>
            Sign up
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

export default Navbar;
