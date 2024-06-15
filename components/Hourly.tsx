import { Box, Divider, Stack } from "@mui/material";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import noon from "../assets/afternoon.png";
import evening from "../assets/evening.png";

const Hourly = () => {
  const { list } = useSelector((state: RootState) => state.weatherApi);
  const dateFormat = (format: string) => {
    const weeks = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const date = new Date(format);
    const day = date.getDay();
    const dayOfMonth = String(date.getDate()).padStart(2, "0");
    const dateString = `${weeks[day]} ${dayOfMonth}`;
    return dateString;
  };
  return (
    <Box>
      <Box sx={styles.todaysComponentContainer}>
        <Box sx={styles.todaysTxt}>Daily Forecast</Box>
        <Box sx={styles.reportData}>
          {list.map((item, ind) => (
            <Box key={ind}>
              <Stack
                direction={"row"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
              >
                <Box
                  sx={
                    ind === 1
                      ? { ...styles.txt, color: "#111", fontWeight: 600 }
                      : styles.txt
                  }
                >
                  {item.dt_txt.split(" ")[1].slice(0, 5)}
                </Box>
                <Box sx={styles.deg}>
                  {Math.round(item.main.temp - 273.15)}°C
                  <Box component={"span"}>/24°</Box>
                </Box>

                {ind % 2 === 0 && (
                  <Box component={"img"} src={noon} width={100} height={100} />
                )}
                {ind % 1 === 0 && ind % 2 !== 0 && (
                  <Box
                    component={"img"}
                    src={evening}
                    width={100}
                    height={80}
                  />
                )}

                <Box>{item.main.humidity}%</Box>
              </Stack>
              <Divider />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Hourly;
