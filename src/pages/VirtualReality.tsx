import React from "react";
import { Typography } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

function VirtualReality() {
  return (
    <div>
      <Title>Computer Lab VR Simulator</Title>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dxKcyaV7lio"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <Paragraph>
        For EECS 498: Mixed Reality Project 1, our team created a virtual world
        simulating Room 1695 of the Bobby and Betty Beyster Building at the
        University of Michigan. The project was built using Unreal Engine 5 over
        a period of 3 weeks and tested on a Lenovo Ocululs Rift S Headset. Our
        project employs fundametal Unreal Engine systems including object
        collision, actor and component inheritance, and User Interface widgets.
      </Paragraph>

      <Paragraph>
        Our simulator recreates a variety of interactions one might have in the
        real-life computing lab, including interactable NPCs, flippable light
        switches, and a drawable whiteboard. A copy machine can be used to
        duplicate any object in the room, while a conveniently placed recyling
        bin can be used to clear any unwanted trash.
      </Paragraph>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/LCxSAPFaYhQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <Paragraph>
        However, grinding assignments in 1695 BBB is no fun. For our custom
        interaction, players can escape their glass prison and venture into the
        wild unknowns. Who knows what monsters await outside?
      </Paragraph>
    </div>
  );
}

export default VirtualReality;
