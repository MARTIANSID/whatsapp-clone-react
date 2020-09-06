import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts"
export default function Sidebar() {
  const [activeKey, setActivityKey] = useState("conversation");
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="conversations">Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contacts">Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content  className="border-right overflow-auto">
        <Tab.Pane eventKey="conversations"> <Conversations /></Tab.Pane> 
        <Tab.Pane eventKey="contacts"> <Contacts /></Tab.Pane> 
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}
