import React from "react";
import { NavLink } from "react-router-dom";
import { Image, Menu } from "semantic-ui-react";
import { AppLogo } from "../assets";

const Navbar = (props: any) => {
  // TODO add actual own id
  const id = 1;
  return (
    <Menu style={{ marginBottom: 0 }}>
      <Menu.Item>
        <Image src={AppLogo} size={"tiny"} />
      </Menu.Item>

      <Menu.Item as={NavLink} exact to={"/feed"} name={"feed"}>
        Feed
      </Menu.Item>

      <Menu.Item as={NavLink} exact to={"/matches"} name={"matches"}>
        Matches
      </Menu.Item>

      <Menu.Item as={NavLink} exact to={`/user/${id}`} name={"my-profile"}>
        My Profile
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
