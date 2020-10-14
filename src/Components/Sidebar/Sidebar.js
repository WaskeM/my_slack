import React, { Component, useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecordRounded";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AddIcon from "@material-ui/icons/Add";
import db from "../../firebase";

function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot(snapshot =>
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-info">
          <h2>Sidebar header</h2>
          <h3>
            <FiberManualRecordIcon />
            Marko Vasic
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Option1" />
      <SidebarOption Icon={InsertCommentIcon} title="Option2" />
      <SidebarOption Icon={InsertCommentIcon} title="Option3" />
      <SidebarOption Icon={InsertCommentIcon} title="Option4" />
      <SidebarOption Icon={InsertCommentIcon} title="Option5" />
      <SidebarOption Icon={InsertCommentIcon} title="Option6" />
      <SidebarOption Icon={ExpandLessIcon} title="show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add channel" addChannelOption />
      <SidebarOption title="Channels" />
      <hr />

      {channels.map(channel => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
