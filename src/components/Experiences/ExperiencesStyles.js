import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  margin: 24px 0 40px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 20px 0 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 500px;
    margin: 24px auto;
  }
`;

export const Box = styled.div`
  background: #212d45;
  border-radius: 12px;
  padding: 3rem;
  min-width: 225px;
  height: 225px;
  margin: 0rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const CompanyText = styled(BoxText)`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 16px;
  }
`;

export const DurationText = styled.span`
  font-size: 12px;
  bordef: 2px solid red;
  line-height: 24px;
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 32px;
    font-size: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;
