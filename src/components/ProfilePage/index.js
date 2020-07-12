import React from 'react';
import Feed from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  EditButton, 
  LocationIcon, 
  CakeIcon, 
  Followage
 } from './styles';

function ProfilePage() {
  return <Container>
    <Banner>
      <Avatar/>
    </Banner>
    <ProfileData>
      <EditButton outlined>Editar perfil</EditButton>
      <h1>Cleidison Barradas</h1>
      <h2>@barradas</h2>

      <p>Developer </p>
      <ul>
        <li>
          <LocationIcon/>
          Porto velho, Rondônia 
        </li>
        <li>
          <CakeIcon/>
          Nascido(a) em 19 de novembro de 1994 
        </li>
      </ul>
      <Followage>
        <span>
          seguindo <strong>100</strong>
        </span>
        <span>
        <strong>1000 </strong> seguidores
        </span>
      </Followage>
    </ProfileData>
    <Feed />
  </Container>;
}


export default ProfilePage;