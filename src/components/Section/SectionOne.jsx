import styled from "styled-components";
import ImageSectionOne from '../../assets/images/imageSectionOne.png'

const Container = styled.div`
  height: 1084px;
  width: 100%;
  /* max-width: 1440px; */
  max-height: 1084px;
  color: white;
  margin: auto auto;
  background-image: ${({img}) => `url(${img})`};
  background-size:cover;
  position: relative;
  /* background: rgb(255,255,255); */
  
  p{
    opacity: 0.5;
  }
`;

const GrantColor = styled.div`
  height: 30%;
  width: 100%;
  bottom: 0;
  background: rgb(255,255,255);
  position: absolute;
  background: linear-gradient(180deg, rgba(255,255,255,0) 75%, rgba(255,255,255,1) 100%);
`

const NavbarContainer = styled.div`
  display: flex;
  padding-top: 3%;
  width: 100%;
`;

const Menu = styled.div`
  flex-grow: ${({ grow }) => (grow ? 1 : 0)};
  text-align: ${({ end }) => (end ? "end" : "start")};
  margin-left: ${({start}) => start && '5%'};
  margin-right: ${({end}) => end && '5%'};
`;

const GroupMenu = styled.div`
  display: flex;
  gap: 62px;
`;

const WrapperContent = styled.div`
  width: 100%;
  /* height: 100%; */
`

const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 5.0625rem;
  text-transform: capitalize;
  max-width: 60%;
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: auto auto;
  padding-top: 8%;
`;

const TextBody = styled.p`
  width: 42%;
  font-size: 1.5rem;
  text-align: center;
  margin: auto auto;
  padding-top: 2%;
`

const SearchContainer = styled.div`
  width: 23%;
  padding: 0.75%;
  background-color: white;
  border-radius: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto;
  margin-top: 2%;
`

const InputText = styled.input`
  width: 90%;
  height: 90%;
  border: none;
  :focus{
    outline: none;
  }
`

const SectionOne = () => {
  return (
    <Container img={ImageSectionOne}>
      <NavbarContainer>
        <Menu grow={'true'} start={'true'}>Panto</Menu>
        <GroupMenu>
          <Menu>furniture</Menu>
          <Menu>shop</Menu>
          <Menu>about us</Menu>
          <Menu>contact</Menu>
        </GroupMenu>
        <Menu grow={'true'} end={'true'}>
          Mock Icon
        </Menu>
      </NavbarContainer>
      <WrapperContent>
        <Title>Make your interior more minimalistic & modern</Title>
        <TextBody>Turn your room with panto into a lot more minimalist and modern with ease and speed</TextBody>
        <SearchContainer>
          <InputText placeholder="Search furniturn...." ></InputText>
        </SearchContainer>
      </WrapperContent>
      <GrantColor />
    </Container>
  );
};

export default SectionOne;
