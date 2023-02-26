import Box from "@mui/material/Box";
import React from "react"
import { IChildren } from "../../types/pokemon.types";

const MainView:React.FC<IChildren> = ({children}) => {
	const style = {
		width:'100%',
		display:'flex',
	}
  return (
	<Box component='main' sx={style}>
		{children}
	</Box>
  )
};

export default MainView;
