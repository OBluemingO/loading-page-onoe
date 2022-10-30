import styled, { css } from "styled-components";
import { TitleText } from "../styedGobals";
import Image from "../../assets/images/Rectangle 1446.png";
import ImageSecond from "../../assets/images/Rectangle 1449.png";
import ImageThrid from "../../assets/images/Group 48095431.png";
import ImageFour from "../../assets/images/Group 48095431 (1).png";

const WrapperImage = styled.div`
  width: ${({ width }) => (width ? `${width}%` : "100%")};
  height: ${({ height }) => (height ? `${height}%` : "100%")};
  /* border: ${({black})=> black && `1px solid black`}; */
  position: relative;
  display: flex;
  gap:10px;
  flex-direction: ${({ both }) => (both ? `column` : `row`)};
  overflow: hidden;
  border-radius: ${({ both }) => both && `20px` };
`;

const ImageSrc = styled.img`
  height: ${({ height, bottom }) => (height ? `${height}%` : bottom ? null : `100%`)};
  width: ${({ width }) => width && `${width}%`};
  object-fit: ${({cover}) => cover ? `cover`:`contain`};
  /* padding:  ${({cover, bottom}) => (cover) ? `0`: bottom ? `0 0 0 0`:`0px`}; */
  border-radius:  ${({cover}) => cover ? `20px`:`0px`};
  transform: ${({ scale }) => scale && `scaleY(${scale})`};
  position: ${({bottom}) => bottom && `absolute`};
  bottom: ${({bottom}) => bottom && `0`};
  ${({ direction }) =>
    direction === "left"
      ? css`
          position: absolute;
          left: 0;
        `
      : css`
          right: 0;
        `}
`;

const Contaienr = styled.div`
  height: 75vh;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* gap: 15%; */
  background-color: ${({ black }) => (black ? `black` : "white")};
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: ${({ width }) => (width ? `${width}%` : `100%`)};
  position: relative;
  left: ${({ pl }) => (pl ? `${pl}%` : `0%`)};
  /* justify-content: flex-start; */
`;

const BothSection = ({ direction, image }) => {
  return direction === "left" ? (
    <Contaienr>
      <WrapperImage width="50" height="70">
        <ImageSrc direction={direction} src={Image} alt="tetstst" />
      </WrapperImage>
      <WrapperText width="50">
        <TitleText mb={10}>Lorem, ipsum.</TitleText>
        <TitleText fontSize={2.625} mb={25}>
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing.
        </TitleText>
        <TitleText width="50" lh="30">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ea, non
          soluta magni officiis, harum quisquam maiores molestias laudantium
          dignissimos itaque dolores inventore, quidem dolore sint accusantium?
          Nostrum, reiciendis minus!
        </TitleText>
      </WrapperText>
    </Contaienr>
  ) : (
    <Contaienr>
      <WrapperText width="50" pl={10}>
        <TitleText mb={10}>Lorem, ipsum.</TitleText>
        <TitleText fontSize={2.625} mb={25}>
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing.
        </TitleText>
        <TitleText width="50" lh="30">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ea, non
          soluta magni officiis, harum quisquam maiores molestias laudantium
          dignissimos itaque dolores inventore, quidem dolore sint accusantium?
          Nostrum, reiciendis minus!
        </TitleText>
      </WrapperText>
      <WrapperImage width="50" height="70" black>
        <WrapperImage black width="32" both>
          <ImageSrc
            // width={25}
            height={40}
            direction={direction}
            src={ImageThrid}
            // scale={1.5}
            alt="tetstst"
            cover
          />
          <ImageSrc
            // width={25}
            height={60}
            // scale={1.5}
            direction={direction}
            src={ImageFour}
            alt="tetstst"
            cover
          />
        </WrapperImage>
        <ImageSrc bottom width={65} direction={direction} src={ImageSecond} alt="tetstst" />
      </WrapperImage>
    </Contaienr>
  );
};

export default BothSection;
