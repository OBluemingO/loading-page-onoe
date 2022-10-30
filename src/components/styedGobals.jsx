import styled from "styled-components";

export const TitleText = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : `1rem`)};
  color: ${({color}) => color ? color : 'black'};
  text-transform: ${({textCase}) => textCase ? textCase : 'capitalize' };
  padding: 0;
  margin-top: ${({mt}) => mt ? `${mt}px` : `0`};
  margin-bottom: ${({mb}) => mb ? `${mb}px` : `0`};
  font-weight: 800;
  width: ${({width}) => width && `${width}%`};
  line-height: ${({lh}) => lh && `${lh}px`};
`;