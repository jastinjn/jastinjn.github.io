import React from "react";
import "./App.css";
import { Layout, Menu, Button, Space, Divider } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "pages/Home";
import VirtualReality from "pages/VirtualReality";
import Contact from "pages/Contact";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function SideMenu() {
  return (
    <>
      <Menu mode="inline" theme="dark">
        <SubMenu title="Projects">
          <Menu.Item>
            <Link to="/vr">Virtual Reality</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
        <Menu.Item>
          <a href="Resume.pdf" download target="_blank">
            Resume
          </a>
        </Menu.Item>
      </Menu>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Header className="header">
            <div className="w-full max-w-screen-xl h-16 flex items-center m-auto">
              <Button size="large" className="text-white flex items-center">
                <Link to="/">Home</Link>
              </Button>
            </div>
          </Header>
          <Layout>
            <Sider>
              <SideMenu />
            </Sider>
            <Content>
              <div style={{ margin: 20 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/vr" element={<VirtualReality />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
