import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import Arrow from "../../assets/svgs/Arrow";
import useFetch from "../../hook/useFetch";
import CardCilent from "../Card/CardCilent";
import CardProducts from "../Card/CardProducts";
import { TitleText } from "../styedGobals";
const Contaienr = styled.div`
  height: 906px;
  width: 100%;
  /* display: flex; */
`;

const WrapperCategory = styled.div`
  height: 20%;
  width: 100%;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 35%;
  height: 25%;
  background-color: black;
  border-radius: 50px;
  margin-top: 3%;
`;

const MenuCategory = styled.div`
  cursor: pointer;
  width: 24%;
  height: 79%;
  display: grid;
  place-items: center;
  border-radius: 50px;
  background-color: white;
`;

const WrapperCard = styled.div`
  margin-top: 4%;
  height: 54%;
  width: 83.2%;
  /* background-color: black; */
  position: relative;
  transform: translate(-50%, 0);
  left: 50%;
  overflow: hidden;
`;

const InnerSlice = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: -webkit-inline-box;

  /* background-color: black; */
`;

const ViewMore = styled.span`
  display: flex;
  margin-top: 3%;
  width: 100%;
  justify-content: center;
`;

const ButtonViewMore = styled.div`
  cursor: pointer;
`;

const SectionThrid = ({ section }) => {
  const [pressed, setPressed] = useState(false);
  const [startX, setStartX] = useState(null);
  const [categories, setCategories] = useState("electronics");
  const [x, setX] = useState(null);

  const wrpperSliceRef = useRef(null);
  const sliceRef = useRef(null);

  const handleMouseDownWrpperSliceRef = (e) => {
    setPressed(true);
    setStartX(e.pageX - sliceRef.current.offsetLeft);
    if (data.length !== 4) wrpperSliceRef.current.style.cursor = "grabbing";
  };

  const handleMouseUpWrpperSliceRef = (e) => {
    setPressed(false);
    if (data.length !== 4) wrpperSliceRef.current.style.cursor = "grab";
  };

  const handleMouseEnterWrpperSliceRef = (e) => {
    if (data.length !== 4) {
      console.log("first");
      wrpperSliceRef.current.style.cursor = "grab";
    } else {
      wrpperSliceRef.current.style.cursor = "default";
    }
  };

  const handleMouseMoveWrpperSliceRef = (e) => {
    if (!pressed) return;

    e.preventDefault();
    setX(e.pageX);
  };

  const { data } = useFetch(`products/category/${categories}`, categories);
  const { data: category } = useFetch("products/categories");

  useEffect(() => {
    sliceRef.current.addEventListener(
      "mousedown",
      handleMouseDownWrpperSliceRef
    );
    sliceRef.current.addEventListener("mouseup", handleMouseUpWrpperSliceRef);
    sliceRef.current.addEventListener(
      "mouseenter",
      handleMouseEnterWrpperSliceRef
    );

    return () => {
      sliceRef.current.removeEventListener(
        "mousedown",
        handleMouseDownWrpperSliceRef
      );
      sliceRef.current.removeEventListener(
        "mouseup",
        handleMouseUpWrpperSliceRef
      );
      sliceRef.current.removeEventListener(
        "mouseenter",
        handleMouseEnterWrpperSliceRef
      );
    };
  }, [data]);

  useEffect(() => {
    sliceRef.current.addEventListener(
      "mousemove",
      handleMouseMoveWrpperSliceRef
    );

    return () => {
      sliceRef.current.removeEventListener(
        "mousemove",
        handleMouseMoveWrpperSliceRef
      );
    };
  }, [pressed]);

  useEffect(() => {
    const walk = x - startX;
    const nodes = sliceRef.current;
    const show = 4;

    if (nodes.childNodes.length > 0) {
      const maxScrollLeft =
        nodes.childNodes[0].offsetWidth * (nodes.childNodes.length - show);
      if (walk <= 10 && walk >= -(maxScrollLeft + 20)) {
        sliceRef.current.style.left = `${walk}px`;
      }
    }
  }, [x]);

  useEffect(() => {
    sliceRef.current.style.left = `${0}px`;
  }, [categories]);

  return section === "products" ? (
    <Contaienr>
      <WrapperCategory>
        <TitleText fontSize={2.625}>Best Selling Product</TitleText>
        <Category>
          {category.length > 0
            ? category.map((el, index) => (
                <MenuCategory
                  key={`${el}_${index}`}
                  onClick={() => setCategories(el)}
                >
                  {el}
                </MenuCategory>
              ))
            : null}
        </Category>
      </WrapperCategory>
      <WrapperCard ref={wrpperSliceRef}>
        <InnerSlice ref={sliceRef}>
          {data.length > 0
            ? data.map((el) => (
                <CardProducts key={`${el.id}_${el.title}`} {...el} />
              ))
            : null}
        </InnerSlice>
      </WrapperCard>
      <ViewMore>
        <ButtonViewMore>
          view more &nbsp; <Arrow height={9} />
        </ButtonViewMore>
      </ViewMore>
    </Contaienr>
  ) : (
    <Contaienr>
      <WrapperCategory>
        <TitleText fontSize={1.25} mb={15}>
          Testimonials
        </TitleText>
        <TitleText fontSize={2.625}>Our Client Reviews</TitleText>
      </WrapperCategory>
      <WrapperCard ref={wrpperSliceRef}>
        <InnerSlice ref={sliceRef}>
          {
            Array(5)
              .fill(null)
              .map((el,index) => (
                <CardCilent key={`${index}-mock-card-cilent`} />
              ))
          }
        </InnerSlice>
      </WrapperCard>
    </Contaienr>
  );
};

export default SectionThrid;
