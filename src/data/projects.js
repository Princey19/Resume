import bpmImg from "../assets/images/musicBPM.jpg";
import musicExporterImg from "../assets/images/music-exporter-img.png";
import youtubeMusicImg from "../assets/images/youtube-music-img.png";
import fileCrosscheckImg from "../assets/images/file2.jpg";
import youtubeTitleManager from "../assets/images/youtubepicture.png";
import youtubeBanner from "../assets/images/youtubeBanner.jpg";
import socialMedia from "../assets/images/socialMedia.jpg";

const projects = [
  {
    id: "bpm-analyzer",
    title: "BPM analyzer",
    description:
      "A real-time BPM analyzer that analyzes the bears per minute of any audio or video file.",
    image: bpmImg,
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://princey19.github.io/beats-per-minute-analyzer/",
  },
  {
    id: "youtube-music-exporter",
    title: "Youtube Music Exporter",
    description:
      "A web application that exports data from youtube using youtube API.",
    image: musicExporterImg,
    tags: ["Node.js", "React.js"],
    link: "https://music-exporter.onrender.com/",
  },
  {
    id: "file-cross-check",
    title: "File Cross-check",
    description:
      "A web application deployed using render that cross checks files for similarities and differencies",
    image: fileCrosscheckImg,
    tags: ["Node.js", "JavaScript", "Express.js"],
    link: "https://file-cross-check.onrender.com/",
  },
  {
    id: "youtube-title-manager",
    title: "Youtube Title Manager",
    description:
      "A web application deployed using render that edits the title of youtube videos",
    image: youtubeTitleManager,
    tags: ["Node.js", "Express.js", "React.js"],
    link: "https://youtube-title-manager-frontend.onrender.com/",
  },
  {
    id: "youtube-banner-editor",
    title: "Youtube Banner Editor",
    description: "A web application that edit pictures to fit youtube banner",
    image: youtubeBanner,
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://princey19.github.io/sm-editor/",
  },
  {
    id: "social-media-profile-resizer",
    title: "SM profile resizer",
    description:
      "A web application that resizes pictures to fit social media profile resolutions",
    image: socialMedia,
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://princey19.github.io/sm-resizer/",
  },
];

export default projects;
