import React from 'react';

import Feed from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData,
  EditButton,
  Location, 
  CakeIcon, 
  Followage 
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />

      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Raphs Costa</h1>
        <h2>@raphaacosta</h2>

        <p>
          Studying web fullstack development, in love with the most modern techs
        </p>

        <ul>
          <li>
            <Location />
            Paraná, Brasil 
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21 de abril de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>62</strong>
          </span>
          <span>
            <strong>34 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed/>
    </Container>
  );
}

export default ProfilePage;