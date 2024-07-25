import React from 'react';
import styled from 'styled-components';

const NameCardContainer = styled.div`
  width: 150px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const Name = styled.h3`
  margin-top: 10px;
`;

const NameCard = ({ avatar, name }) => (
  <NameCardContainer>
    <Avatar src={avatar} alt={`${name}'s avatar`} />
    <Name>{name}</Name>
  </NameCardContainer>
);

export default NameCard;
