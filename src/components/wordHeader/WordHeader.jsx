import { useRef } from "react";
import {
  HeaderWrapper,
  InnerWrapper,
  PlayBtnWrapper,
} from "./WordHeader.styles";
import { ReactComponent as PlayIcon } from "../../assets/images/icon-play.svg";

const WordHeader = ({ word, phonetic, audio }) => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audio && audioRef.current.play();
  };

  return (
    <HeaderWrapper>
      <InnerWrapper>
        <h1>{word}</h1>
        <p>{phonetic}</p>
      </InnerWrapper>
      <PlayBtnWrapper onClick={handlePlay}>
        {audio && <audio src={audio} ref={audioRef} />}
        <PlayIcon />
      </PlayBtnWrapper>
    </HeaderWrapper>
  );
};

export default WordHeader;
