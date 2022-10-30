import styled from "styled-components";
import { TitleText } from "../styedGobals";
import { Card } from "../../assets/svgs";

const WrapperContainer = styled.div`
  width: 25.85%;
  height: 100%;
  /* border: 1px solid hotpink; */
  /* display: ; */
`;

const Container = styled.div`
  width: 86.3%;
  height: 99%;
  border: 1px solid hotpink;
  display: flex;
  align-items: flex-end;
  border-radius: 20px;
  background-image: ${({src}) => src && `url(${src})`};
  background-size: contain;
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
`;

const WrapperIcon = styled.span`
  cursor: pointer;
`;

const WrapperCard = styled.div`
  width: 100%;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 5%;
`;

const ImageCilent = styled.div`
  /* background-color: white; */
  width: 15%;
  height: 25%;
  border-radius: 100%;
  position: absolute;
  top: 5%;
  background-image: ${({src}) => src && `url(${src})`};
  background-size: cover;
`;

const WrapperContent = styled.div`
  position: absolute;
  width: 80%;
  height: 60%;
  /* background-color: white; */
  bottom: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardCilent = (props) => {

  return (
    <WrapperContainer>
      <Container src={'https://fakeimg.pl/800/?retina=1&text=fakeImage'}>
        <WrapperCard>
          {/* <ImageCilent src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'} /> */}
          <ImageCilent src={'https://fakeimg.pl/300/?retina=1&text=fakeImage'} />
          <WrapperContent>
            <TitleText>Lorem.</TitleText>
            <TitleText  fontSize={0.7} mt={5}>asdas</TitleText>
            <center>
              <TitleText fontSize={0.75} width='90' mt={10}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                delectus eaque quos. Deserunt cumque accusamus ipsum maiores.
              </TitleText>
            </center>
          </WrapperContent>
          <Card width="90%" height="60%" />
        </WrapperCard>
      </Container>
    </WrapperContainer>
  );
};

export default CardCilent;
