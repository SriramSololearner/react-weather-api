import { Box, Stack } from "@mui/material";
import icon from "../assets/cloud.png";
import { styles } from "./styles";

const Nav = () => {
  return (
    <Box sx={styles.nav}>
      <Stack direction={"row"} alignItems={"center"}>
        <Box
          component={"img"}
          src={icon}
          alt="icon0image"
          sx={styles.cloudIcon}
        />
      </Stack>
    </Box>
  );
};

export default Nav;
