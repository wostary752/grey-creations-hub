import weldingFrame from "@/assets/portfolio/welding-frame.jpg.asset.json";
import weldedJoint from "@/assets/portfolio/welded-joint.jpg.asset.json";
import adjustableFrame from "@/assets/portfolio/adjustable-frame.jpg.asset.json";
import beamBrackets from "@/assets/portfolio/beam-brackets.jpg.asset.json";
import channelPerforated from "@/assets/portfolio/channel-perforated.jpg.asset.json";
import liftingLugs from "@/assets/portfolio/lifting-lugs.jpg.asset.json";
import angleBrackets from "@/assets/portfolio/angle-brackets.jpg.asset.json";
import postBases from "@/assets/portfolio/post-bases.jpg.asset.json";
import profileBatch from "@/assets/portfolio/profile-batch.jpg.asset.json";
import laserParts from "@/assets/portfolio/laser-parts.jpg.asset.json";
import img42 from "@/assets/portfolio/images-4-2.jpg.asset.json";
import img52 from "@/assets/portfolio/images-5-2.jpg.asset.json";
import img6 from "@/assets/portfolio/images-6.jpg.asset.json";
import img7 from "@/assets/portfolio/images-7.jpg.asset.json";
import img8 from "@/assets/portfolio/images-8.jpg.asset.json";
import img9 from "@/assets/portfolio/images-9.jpg.asset.json";
import img10 from "@/assets/portfolio/images-10.jpg.asset.json";
import img11 from "@/assets/portfolio/images-11.jpg.asset.json";
import img12 from "@/assets/portfolio/images-12.jpg.asset.json";

export type Project = {
  id: string;
  image: string;
};

export const projects: Project[] = [
  { id: "1", image: weldingFrame.url },
  { id: "2", image: postBases.url },
  { id: "n1", image: img42.url },
  { id: "3", image: angleBrackets.url },
  { id: "n2", image: img7.url },
  { id: "4", image: beamBrackets.url },
  { id: "n3", image: img8.url },
  { id: "5", image: channelPerforated.url },
  { id: "n4", image: img9.url },
  { id: "6", image: liftingLugs.url },
  { id: "n5", image: img10.url },
  { id: "7", image: weldedJoint.url },
  { id: "n6", image: img11.url },
  { id: "8", image: adjustableFrame.url },
  { id: "n7", image: img12.url },
  { id: "9", image: profileBatch.url },
  { id: "n8", image: img52.url },
  { id: "10", image: laserParts.url },
  { id: "n9", image: img6.url },
];
