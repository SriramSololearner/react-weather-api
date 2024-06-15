import {
  Box,
  Divider,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { styles } from "./styles";
import noon from "../assets/afternoon.png";
import evening from "../assets/evening.png";
import circle from "../assets/circle.png";
import { WiHumidity } from "react-icons/wi";

import {
  Air,
  Compress,
  DeviceThermostat,
  FormatLineSpacing,
  VerticalAlignBottom,
  VerticalAlignTop,
  Visibility,
  Waves,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Maps from "./Maps";

const Today = () => {
  const { today, list } = useSelector((state: RootState) => state.weatherApi);

  const dateFormat = (format: string) => {
    const weeks = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const date = new Date(format);
    const day = date.getDay();
    const dayOfMonth = String(date.getDate()).padStart(2, "0");
    const dateString = `${weeks[day]} ${dayOfMonth}`;
    return dateString;
  };
  return (
    <Stack>
      <Box sx={styles.todaysComponentContainer}>
        <Box sx={styles.todaysTxt}>
          {" "}
          Weather Today in {today.name + " " + "Telangana"}
        </Box>

        <Paper sx={{ ...styles.topContainer, height: "fit-content", mr: 5 }}>
          <Box sx={styles.colorweatherTodayContainer}>
            <Box>
              <Typography sx={styles.FeelText}>Feels Like</Typography>
              <Typography sx={styles.weatherTodayDegreetext}>
                {Math.round(today.main.feels_like - 273.15)}°
              </Typography>
            </Box>
            <Stack direction={"column"}>
              <Box
                component={"img"}
                src={circle}
                sx={styles.weatherTodayImage}
              />
              <Stack direction={"row"}>
                <Stack direction={"row"}>
                  <VerticalAlignTop sx={styles.iconColor} />
                  <Typography>6:19 am</Typography>
                </Stack>
                <Stack direction={"row"}>
                  <VerticalAlignBottom sx={styles.iconColor} />
                  <Typography>6:27 pm</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
          <Stack sx={styles.mainListContainer}>
            <List sx={styles.weatherTodayListContainer}>
              <ListItem sx={styles.listItem}>
                <Stack direction={"row"} gap={1}>
                  <DeviceThermostat titleAccess="temparature" />
                  <Typography sx={styles.FeelsText}>High / Low</Typography>
                </Stack>
                <Typography sx={styles.FeelsText}>
                  --/{Math.round(today.main.temp - 273.15)}°
                </Typography>
              </ListItem>
              <Divider component="li" />
              <ListItem sx={styles.listItem}>
                <Stack direction={"row"} gap={1}>
                  <WiHumidity title="Humidity" />
                  <Typography sx={styles.FeelsText}>Humidity</Typography>
                </Stack>
                <Typography sx={styles.FeelsText}>
                  {today.main.humidity}%
                </Typography>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem sx={styles.listItem}>
                <Stack direction={"row"} gap={1}>
                  <Compress />
                  <Typography sx={styles.FeelsText}>Pressure</Typography>
                </Stack>
                <Typography sx={styles.FeelsText}>
                  {today.main.pressure} in
                </Typography>
              </ListItem>
              <Divider component="li" />
              <ListItem sx={styles.listItem}>
                <Stack direction={"row"} gap={1}>
                  <Visibility />
                  <Typography sx={styles.FeelsText}>Visibility</Typography>
                </Stack>
                <Typography sx={styles.FeelsText}>
                  {today.visibility}mi
                </Typography>
              </ListItem>
            </List>

            <List sx={styles.weatherTodayListContainer}>
              <ListItem sx={styles.listItem}>
                <Stack direction={"row"} gap={1}>
                  <Air />
                  <Typography sx={styles.FeelsText}>Wind</Typography>
                </Stack>
                <Typography sx={styles.FeelsText}>
                  {Math.round(today.wind.speed)} mph
                </Typography>
              </ListItem>
              <Divider component="li" />
              <ListItem sx={styles.listItem}>
                <Stack direction={"row"} gap={1}>
                  <Waves />
                  <Typography sx={styles.FeelsText}>Sea Level</Typography>
                </Stack>
                <Typography sx={styles.FeelsText}>
                  {today.main.sea_level}
                </Typography>
              </ListItem>
              <Divider component="li" />
              <ListItem sx={styles.listItem}>
                <Stack direction={"row"} gap={1}>
                  <FormatLineSpacing />
                  <Typography sx={styles.FeelsText}>Grd Level</Typography>
                </Stack>
                <Typography sx={styles.FeelsText}>
                  {today.main.grnd_level}
                </Typography>
              </ListItem>
            </List>
          </Stack>
        </Paper>
      </Box>

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
                    ind === 2
                      ? { ...styles.txt, color: "#111", fontWeight: 600 }
                      : styles.txt
                  }
                >
                  {dateFormat(item.dt_txt.split(" ")[0])}
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
      <Box sx={styles.todaysComponentContainer}>
        <Maps />
      </Box>
    </Stack>
  );
};

export default Today;
