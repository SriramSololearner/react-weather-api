import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import Nav from "./Nav";
import { styles } from "./styles";
import sun from "../assets/sun.png";
import Today from "./Today";
import Hourly from "./Hourly";
import TenDay from "./TenDay";
import Monthly from "./Monthly";
import Weekend from "./Weekend";
import Radar from "./Radar";
import { fetch5daysData, fetchData } from "../redux/reducers/slider";

const LandingPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [location, setLocation] = useState({
    lat: 17.4486,
    lon: 78.3908,
  });

  const { today } = useSelector((state: RootState) => state.weatherApi);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          ...location,
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        });
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  useEffect(() => {
    if (location.lat !== 0 && location.lon !== 0) {
      dispatch(fetchData(location));
      dispatch(fetch5daysData(location));
    }
  }, [location]);

  const handleActive = (ind: number) => {
    setActiveIndex(ind);
  };

  const displayComponents = () => {
    switch (activeIndex) {
      case 0:
        return <Today />;
      case 1:
        return <Hourly />;
      case 2:
        return <TenDay />;
      case 3:
        return <Monthly />;
      case 4:
        return <Weekend />;
      case 5:
        return <Radar />;
    }
  };
  return (
    <Box sx={styles.root}>
      <Nav />
      <Box sx={styles.secondNav}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={1}
          sx={styles.secondNavTxt}
        >
          <Box
            component={"img"}
            src={sun}
            alt="sunImg"
            width={"30px"}
            height={"20px"}
          />
          <Box>
            {Math.round(today.main.feels_like - 273.15)}
            <Box component={"sup"}>o</Box>
          </Box>
          <Box>{today.name}</Box>
        </Stack>
      </Box>
      <Stack
        direction={"row"}
        sx={styles.thirdNav}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {["Today", "Hourly", "10 Day", "Monthly", "Weekend", "Radar"].map(
          (item, ind) => (
            <Box
              key={ind}
              sx={
                activeIndex === ind
                  ? {
                      ...styles.thirdNav_item,
                      textDecoration: "underline #ffff 16%",
                      textUnderlineOffset: "12px",
                    }
                  : styles.thirdNav_item
              }
              onClick={() => handleActive(ind)}
            >
              {item}
            </Box>
          )
        )}
      </Stack>
      <Box sx={styles.componentContainer}>{displayComponents()}</Box>
    </Box>
  );
};

export default LandingPage;
