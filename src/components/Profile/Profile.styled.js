import styled from 'styled-components';
export const ProfileWrap = styled.div`
  margin: 50px;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;
export const Description = styled.div`
  text-align: center;
  width: 300px;
  padding: 30px;
`;
export const ProfileAvatar = styled.img`
  width: 200px;
  border-radius: 50%;
`;
export const ProfileName = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 16px;
`;
export const ProfileTagLocation = styled.p`
  color: rgb(141, 141, 141);
`;
export const ProfileStatistics = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #f3f3f3;
  border-top: 1px solid rgb(227, 227, 227);
`;
export const StatisticsItem = styled.li`
  text-align: center;
  padding: 20px;
  width: 100%;
  :not(:last-child) {
    border-right: 1px solid rgb(227, 227, 227);
  }
`;
export const StatisticsLabel = styled.span`
  display: block;
  color: rgb(123, 123, 123);
  font-weight: 500;
  margin-bottom: 5px;
`;
export const StatisticsQuantity = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 700;
`;
