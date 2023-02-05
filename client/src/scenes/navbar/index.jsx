import {
   Box,
   useMediaQuery,
   useTheme,
   Typography,
   InputBase,
   IconButton,
   FormControl,
   Select,
   MenuItem,
} from "@mui/material";
import {
   Search,
   DarkMode,
   LightMode,
   Notifications,
   Help,
   Menu,
   Close,
   Message,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setLogout, setMode } from "../../state";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";

const Navbar = () => {
   const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const user = useSelector((state) => state.user);
   const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
   const theme = useTheme();
   const neutralLight = theme.palette.neutral.light;
   const dark = theme.palette.dark;
   const background = theme.palette.background.default;
   const primaryLight = theme.palette.primary.light;
   const alt = theme.palette.background.alt;
   const fullName = `${user.firstName} ${user.lastName}`;
//    const fullName = `Abdul Abubakr`;
   return (
      <FlexBetween padding="1rem 6%" backgroundColor={alt}>
         <FlexBetween gap="1.75rem">
            <Typography
               fontWeight="bold"
               fontSize="clamp(1rem, 2rem, 2.25rem)"
               color="primary"
               onClick={() => navigate("/home")}
               sx={{
                  "&:hover": {
                     color: primaryLight,
                     cursor: "pointer",
                  },
               }}
            >
               SocialBook
            </Typography>
            {isNonMobileScreen && (
               <FlexBetween
                  backgroundColor={neutralLight}
                  borderRadius="9px"
                  gap="3rem"
                  padding="0.1rem 0.5rem"
    
               >
                  <InputBase placeholder="Search..."/>
                  <IconButton>
                     <Search />
                  </IconButton>
               </FlexBetween>
            )}
         </FlexBetween>

         {/* DESKTOP NAV */}
         {isNonMobileScreen ? (
            <FlexBetween gap= "2rem">
               <IconButton onClick={() => dispatch(setMode())}>
                  {theme.palette.mode === "dark" ? (
                     <DarkMode sx={{ fontSize: "25px" }} />
                  ) : (
                     <LightMode sx={{ color: dark, fontSize: "25px" }} />
                  )}
               </IconButton>
               <Message sx={{ fontSize: "25px" }} />
               <Notifications sx={{ fontSize: "25px" }} />
               <Help sx={{ fontSize: "25px" }} />
               <FormControl variant="standard" value={fullName}>
                  <Select
                     value={fullName}
                     sx={{
                        backgroundColor: neutralLight,
                        width: "150px",
                        borderRadius: "0.25rem",
                        p: "0.25rem 1rem",
                        "& .MuiSvgIcon-root": {
                           pr: "0.25rem",
                           width: "3rem",
                        },
                        "& .MuiSelect-select:focus": {
                           backgroundColor: neutralLight,
                        },
                     }}
                     input={<InputBase />}
                  >
                     <MenuItem value={fullName}>
                        <Typography>{fullName}</Typography>
                     </MenuItem>
                     <MenuItem onClick={() => dispatch(setLogout())}>
                        Log Out
                     </MenuItem>
                  </Select>
               </FormControl>
            </FlexBetween>
         ) : (
            <IconButton
               onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
               <Menu />
            </IconButton>
         )}
         {/* MOBILE NAV */}
         {!isNonMobileScreen && isMobileMenuToggled && (
            <Box
               position="fixed"
               right="0"
               bottom="0"
               height="100%"
               zIndex="10"
               maxWidth="500px"
               minWidth="300px"
               backgroundColor={background}
            >
               {/* CLOSE ICON */}
               <Box display="flex" justifyContent="flex-end" p="1rem">
                  <IconButton
                     onClick={() =>
                        setIsMobileMenuToggled(!isMobileMenuToggled)
                     }
                  >
                     <Close />
                  </IconButton>
               </Box>
               {/* MENUT ITEMS */}
               <FlexBetween display = "flex" flexDirection="column" justifyConten = "center" alignItems = "center" gap= "3rem">
               <IconButton onClick={() => dispatch(setMode())}>
                  {theme.palette.mode === "dark" ? (
                     <DarkMode sx={{ fontSize: "25px" }} />
                  ) : (
                     <LightMode sx={{ color: dark, fontSize: "25px" }} />
                  )}
               </IconButton>
               <Message sx={{ fontSize: "25px" }} />
               <Notifications sx={{ fontSize: "25px" }} />
               <Help sx={{ fontSize: "25px" }} />
               <FormControl variant="standard" value={fullName}>
                  <Select
                     value={fullName}
                     sx={{
                        backgroundColor: neutralLight,
                        width: "150px",
                        borderRadius: "0.25rem",
                        p: "0.25rem 1rem",
                        "& .MuiSvgIcon-root": {
                           pr: "0.25rem",
                           width: "3rem",
                        },
                        "& .MuiSelect-select:focus": {
                           backgroundColor: neutralLight,
                        },
                     }}
                     input={<InputBase />}
                  >
                     <MenuItem value={fullName}>
                        <Typography>{fullName}</Typography>
                     </MenuItem>
                     <MenuItem onClick={() => dispatch(setLogout())}>
                        Log Out
                     </MenuItem>
                  </Select>
               </FormControl>
            </FlexBetween>
                     
            </Box>
         )}
      </FlexBetween>
   );
};

export default Navbar;
