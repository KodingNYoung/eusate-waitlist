import ReactPlayerBase from "react-player";
import { ReactPlayerProps } from "react-player/types";
import type { YouTubeConfig } from "react-player/youtube";

const youtubeConfig: YouTubeConfig = {
  playerVars: {
    controls: 0,
    modestbranding: 1,
    rel: 0,
  } as YouTubeConfig["playerVars"],
};

type Props = ReactPlayerProps;

export const ReactPlayer = () => {
  return <ReactPlayerBase />;
};
