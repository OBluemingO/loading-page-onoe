import styled from "styled-components";
import {Star, Plus} from "../../assets/svgs/index";
import { TitleText } from "../styedGobals";

const WrapperContainer = styled.div`
  width: 25.85%;
  height: 100%;
  /* border: 1px solid hotpink; */
`;

const Container = styled.div`
  width: 86.3%;
  height: 99%;
  border: 1px solid hotpink;

`;

const WrapperImageSrc = styled.div`
  height: 50%;
  width: 80%;
  margin: auto;
`;

const ImageSrc = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const WrapperProductText = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  height: 50%;
  position: relative;
`;

const WrapperStar = styled.div`
  display: flex;
  gap: 2px;
`;

const WrapperPrice = styled.div`
  position: absolute;
  bottom: 7.5%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const WrapperIcon = styled.span`
  cursor: pointer;
`

const CardProducts = ({ image, title, category, rating: { rate, count }, price }) => {
  return (
    <WrapperContainer>
      <Container>
        <WrapperImageSrc>
          <ImageSrc src={image} alt={`${title}_${category}`} loading="lazy" />
        </WrapperImageSrc>
        <WrapperProductText>
          <TitleText color="gray" mt={7.5}>
            {category}
          </TitleText>
          <TitleText color={'#0D1B39'} bold mt={7.5} mb={7.5}>
            {title}
          </TitleText>
          <WrapperStar>
            {Array(+rate.toString().split(".")[0])
              .fill(null)
              .map((el, index) => (
                <Star key={`${el}_star_${index}`} />
              ))}
          </WrapperStar>
          <WrapperPrice>
            <TitleText fontSize={1.5} bold color={'#0D1B39'}>${price}</TitleText>
            <WrapperIcon>
              <Plus width="35" height="35"/>
            </WrapperIcon>
          </WrapperPrice>
        </WrapperProductText>
      </Container>
    </WrapperContainer>
  );
};

export default CardProducts;
