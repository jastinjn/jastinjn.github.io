import React from "react";
import { Typography } from "antd";
import { Image } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

function Home() {
  return (
    <div>
      <Title level={1}>Justin Ng</Title>
      <div style={{ margin: "2px" }}>
        <Image width={300} src="me.jpg" />
        <Title level={2}>About Me</Title>
        <Paragraph>
          Hello, my name is Justin and I am a final year student majoring in
          Computer Engineering at the University of Michigan. My areas of study
          include robotics, computer vision and embedded systems. I also pursue
          game development as a hobby and am currently taking a class in Mixed
          Reality technologies.
        </Paragraph>
        <Paragraph>
          This website features several projects I have worked on as an
          undergraduate student at the University of Michigan.
        </Paragraph>
      </div>
    </div>
  );
}

export default Home;
