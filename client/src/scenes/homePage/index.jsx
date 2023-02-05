import Navbar from "../navbar";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import UserWidget from "../widgets/UserWidget";
import MyPostWidget from "../widgets/MyPostWidget";
import PostsWidget from "../widgets/PostsWidget";
import FriendListWidget from "../widgets/FriendListWidget";

const HomePage = () => {
   const isNonMobileScreen = useMediaQuery("(min-width : 1000px)");
   const { _id, picturePath } = useSelector((state) => state.user);

   return (
      <Box>
         <Navbar />
         <Box
            width="100%"
            p="2rem 6%"
            display={isNonMobileScreen ? "flex" : "block"}
            gap="0.5rem"
            justifyContent="space-between"
         >
            <Box flexBasis={isNonMobileScreen ? "26%" : undefined}>
                <UserWidget userId = {_id} picturePath = {picturePath} />
            </Box>
            <Box flexBasis={isNonMobileScreen ? "42%" : undefined} mt = {isNonMobileScreen ? undefined : "2rem"}>
                <MyPostWidget picturePath={picturePath}/>
                <PostsWidget userId = {_id}/>
            </Box>
            {isNonMobileScreen && (
                <Box flexBasis="26%" >
                  <FriendListWidget userId={_id} />
                </Box>
            )}
         </Box>
      </Box>
   );
};

export default HomePage;
