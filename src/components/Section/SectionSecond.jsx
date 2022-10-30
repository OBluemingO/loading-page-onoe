import styled from "styled-components";
import Arrow from "../../assets/svgs/Arrow";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 420px;
  width: 100%;
`;

const WrapperContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : `1rem`)};
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10%;
`;

const MoreDetail = styled.div`
  cursor: pointer;
`;

const SectionSecond = () => {
  return (
    <Container>
      <WrapperContent>
        <TitleText fontSize={2.625}>
          Why
          <br /> Choosing Us
        </TitleText>
      </WrapperContent>

      {/* <WrapperContent>
        <WrapperText>
          <TitleText fontSize={1.5}>Lorem, ipsum.</TitleText>
          <TitleText fontSize={1}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            nostrum veritatis incidunt ipsum deserunt laborum illum nihil
            exercitationem nam voluptatibus!
          </TitleText>
          <MoreDetail>More Detail &nbsp; <Arrow /> </MoreDetail>
        </WrapperText>
      </WrapperContent> */}
      {Array(3)
        .fill(null)
        .map((el, index) => (
          <WrapperContent key={`mock-card-${index}`}>
            <WrapperText>
              <TitleText fontSize={1.5}>Lorem, ipsum.</TitleText>
              <TitleText fontSize={1}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                nostrum veritatis incidunt ipsum deserunt laborum illum nihil
                exercitationem nam voluptatibus!
              </TitleText>
              <MoreDetail>
                More Detail &nbsp; <Arrow height={9} />{" "}
              </MoreDetail>
            </WrapperText>
          </WrapperContent>
        ))}
    </Container>
  );
};

export default SectionSecond;
