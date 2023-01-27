import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate();

  const handleSearch=(e)=>{
    e.preventDefault();
    if(searchTerm){
    navigate(`/search/${searchTerm}`);
    setSearchTerm('')
    }
  }
  
  return (
   <Paper component="form" 
    onSubmit={handleSearch} 
   sx={{
    borderRadius: 20,
    border: "1px solid #e3e3e3",
    pl: 2,
    boxShadow: "none",
    mr: { sm: 5 },
  }}>  

    <input type="text"
    className="search-bar"
    placeholder="Search..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    />
    <IconButton>
       <Search type="submit" sx={{color:'red'}}/>
    </IconButton>
   </Paper>
  )
}

export default SearchBar