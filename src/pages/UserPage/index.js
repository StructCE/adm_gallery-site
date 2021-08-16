import React from 'react'
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { Container } from './styles';
import { WiStars } from "react-icons/wi";
import { CgCross } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import placeholder from "../../assets/placeholder.png"
import { useHistory } from "react-router-dom";

const UserPage = () => {
  return (
    <Container>
      <span>teste</span>
    </Container>
  )
}
  
export default UserPage;