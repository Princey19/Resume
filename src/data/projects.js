import bpmImg from "../assets/images/musicBPM.jpg";
import musicExporterImg from "../assets/images/music-exporter-img.png";
import youtubeMusicImg from "../assets/images/youtube-music-img.png";
import fileCrosscheckImg from "../assets/images/file2.jpg";
import youtubeTitleManager from "../assets/images/youtubepicture.png";
import youtubeBanner from "../assets/images/youtubeBanner.jpg";
import socialMedia from "../assets/images/socialMedia.jpg";
import musicData from "../assets/images/musicData.jpg";
import musicGenre from "../assets/images/musicGenre.jpg";

const projects = [
  {
    id: "youtube-music-exporter",
    title: "YouTube Music Exporter",
    description:
      "Internal tool that cross-references a record label's YouTube uploads against its music catalog to flag gaps and mismatches, turning a manual reconciliation process into a few minutes of automated checking.",
    image: musicExporterImg,
    tags: ["React", "Node.js", "Express", "YouTube API"],
    link: "https://music-exporter.onrender.com/",
  },
  {
    id: "catalog-metadata-pipeline",
    title: "Catalog Metadata Automation Pipeline",
    description:
      "A pipeline that classifies and fills missing metadata across a ~50,000-row music catalog spreadsheet, with AI-assisted classification and color highlighting on every auto-filled cell so the team can spot-check results at a glance.",
    image: musicData,
    tags: ["Node", "musicBrainz", "Data Automation"],
    link: null,
    internal: true,
  },
  {
    id: "genre-tagging-tool",
    title: "Artist Genre Classifier",
    description:
      "React tool that batch-classifies roughly 2,000 African artists by genre from an Excel source file, using a custom taxonomy covering Afrobeats, Amapiano, Highlife, Fuji, Juju, and Bongo Flava.",
    image: musicGenre,
    tags: ["React", "Anthropic API", "Excel Automation"],
    link: null,
    internal: true,
  },
  {
    id: "file-cross-check",
    title: "File Cross-Check",
    description:
      "Web app that compares files for similarities and differences, deployed on Render for the team to use without a local install.",
    image: fileCrosscheckImg,
    tags: ["Node.js", "Express", "JavaScript"],
    link: "https://file-cross-check.onrender.com/",
  },
  {
    id: "youtube-title-manager",
    title: "YouTube Title Manager",
    description:
      "React and Express app for bulk-editing YouTube video titles directly through the YouTube API, built to speed up catalog housekeeping across large upload batches.",
    image: youtubeTitleManager,
    tags: ["React", "Node.js", "Express", "YouTube API"],
    link: null,
    internal: true,
  },
  {
    id: "bpm-analyzer",
    title: "BPM Analyzer",
    description:
      "Real-time beats-per-minute analyzer for audio and video files, running entirely in the browser.",
    image: bpmImg,
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://princey19.github.io/beats-per-minute-analyzer/",
  },
  {
    id: "youtube-banner-editor",
    title: "YouTube Banner Editor",
    description:
      "Browser-based image editor that crops and resizes pictures to fit YouTube's banner dimensions.",
    image: youtubeBanner,
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://princey19.github.io/sm-editor/",
  },
  {
    id: "social-media-profile-resizer",
    title: "SM Profile Resizer",
    description:
      "Browser-based image editor that resizes pictures to fit standard social media profile resolutions.",
    image: socialMedia,
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://princey19.github.io/sm-resizer/",
  },
];

export default projects;
