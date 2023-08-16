import React from 'react'
import {Stack} from '@mui/material'
import {logo} from '../utils/constants'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <Stack 
    direction='row'
    alignItems='center'
    p={2}
    sx={{position:'sticky',justifyContent:'space-between', background: '#000', top: 0}} >
       <Link to="/">
        <img src={logo} alt="Logo" height={40} />
       </Link>
       <SearchBar/>
    </Stack>

  )
}

export default Navbar