
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import '../Añadidos/Card1_stilos.css';
import Mensaje from "../Añadidos/Mensaje.jsx"

import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";


const Card1 = () => {
    const [iconPills, setIconPills] = React.useState("1");
    const [pills, setPills] = React.useState("1");
    return (
        <Col className="ml-auto mr-auto" md="10" xl="6">
            <p className="category">ESTO ES UNA PRUEBA</p>
            <Card className="light-blue-bg">
                <CardHeader>
                    <Nav
                        className="nav-tabs-neutral justify-content-center"
                        data-background-color="blue" 
                        role="tablist"
                        tabs
                    >
                        <NavItem>
                            <NavLink
                                className={pills === "1" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPills("1");
                                }}
                            >
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={pills === "2" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPills("2");
                                }}
                            >
                                Profile
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={pills === "3" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPills("3");
                                }}
                                
                            >
                                
                                Enviar mensaje
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={pills === "4" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPills("4");
                                }}
                            >
                                Settings
                            </NavLink>
                        </NavItem>
                    </Nav>
                </CardHeader>
                <CardBody>
                    <TabContent className="text-center" activeTab={"pills" + pills}>
                        <TabPane tabId="pills1">
                            <p>
                                I think that’s a responsibility that I have, to push
                                possibilities, to show people, this is the level that
                                things could be at. So when you get something that has
                                the name Kanye West on it, it’s supposed to be pushing
                                the furthest possibilities. I will be the leader of a
                                company that ends up being worth billions of dollars,
                                because I got the answers. I understand culture. I am
                                the nucleus.
                            </p>
                        </TabPane>
                        <TabPane tabId="pills2">
                            <p>
                                I will be the leader of a company that ends up being
                                worth billions of dollars, because I got the answers. I
                                understand culture. I am the nucleus. I think that’s a
                                responsibility that I have, to push possibilities, to
                                show people, this is the level that things could be at.
                                I think that’s a responsibility that I have, to push
                                possibilities, to show people, this is the level that
                                things could be at.
                            </p>
                        </TabPane>
                        <TabPane tabId="pills3">
                            <p>
                                <Mensaje></Mensaje>
                            </p>
                        </TabPane>
                        <TabPane tabId="pills4">
                            <p>
                                "I will be the leader of a company that ends up being
                                worth billions of dollars, because I got the answers. I
                                understand culture. I am the nucleus. I think that’s a
                                responsibility that I have, to push possibilities, to
                                show people, this is the level that things could be at."
                            </p>
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Card1;