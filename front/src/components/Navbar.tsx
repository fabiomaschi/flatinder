import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navbar = (props: any) => {
  // TODO add actual own id
  const id = 1;
  return (
    <Menu>
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
