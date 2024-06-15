

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const apikey = "36f08ff6a509087994f78c27b256a245";

interface Istate {
    isLoading: boolean,
    error: string,
    status: string,
    "list": {
        "dt": number,
        "main": {
            "temp": number,
            "feels_like": number,
            "temp_min": number,
            "temp_max": number,
            "pressure": number,
            "sea_level": number,
            "grnd_level": number,
            "humidity": number,
            "temp_kf": number
        },
        "weather": [
            {
                "id": number,
                "main": string,
                "description": string,
                "icon": string
            }
        ],
        "clouds": {
            "all": number
        },
        "wind": {
            "speed": number,
            "deg": number,
            "gust": number
        },
        "visibility": number,
        "pop": number,
        "sys": {
            "pod": string
        },
        "dt_txt": string
    }[],
    today: {
        "dt": number,
        "name": string,
        "main": {
            "temp": number,
            "feels_like": number,
            "temp_min": number,
            "temp_max": number,
            "pressure": number,
            "sea_level": number,
            "grnd_level": number,
            "humidity": number,
            "temp_kf": number
        },
        "weather": [
            {
                "id": number,
                "main": string,
                "description": string,
                "icon": string
            }
        ],
        "clouds": {
            "all": number
        },
        "wind": {
            "speed": number,
            "deg": number,
            "gust": number
        },
        "visibility": number,
        "pop": number,
        "sys": {
            "pod": string
        },
        "dt_txt": string
    },
}

const initialState: Istate = {
    today: {
        "dt": 1711087200,
        "name": "Globe",
        "main": {
            "temp": 304.94,
            "feels_like": 304.65,
            "temp_min": 304.94,
            "temp_max": 306.35,
            "pressure": 1016,
            "sea_level": 1015,
            "grnd_level": 949,
            "humidity": 37,
            "temp_kf": -1.41
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "clouds": {
            "all": 24
        },
        "wind": {
            "speed": 1.39,
            "deg": 173,
            "gust": 2.95
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-03-22 06:00:00"
    },
    "list": [{
        "dt": 1711087200,
        "main": {
            "temp": 304.94,
            "feels_like": 304.65,
            "temp_min": 304.94,
            "temp_max": 306.35,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 949,
            "humidity": 37,
            "temp_kf": -1.41
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "clouds": {
            "all": 24
        },
        "wind": {
            "speed": 1.39,
            "deg": 173,
            "gust": 2.95
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-03-22 06:00:00"
    }],
    isLoading: false,
    error: "",
    status: "",
}


const Slider = createSlice({
    name: "weatherReport",
    initialState,
    reducers: {
        // reducers
    },

    extraReducers(builder) {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.today = action.payload
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = "failed"
            })
            .addCase(fetch5daysData.fulfilled, (state, action) => {
                state.list = action.payload.list;
            })
            .addCase(fetch5daysData.rejected, (state) => {
                state.isLoading = true;
                state.error = "Failed to fetch data for the next"
            })
    },

});

// Get weather Data
export const fetchData = createAsyncThunk('weatherReport', async (location: { lat: number, lon: number }) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apikey}`, { method: "GET" });
    const data = await response.json();
    return data;
});

// Get 5days weather report 
export const fetch5daysData = createAsyncThunk("weather/fiveDays", async (location: { lat: number, lon: number }) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${apikey}`)
    const result = response.json();
    return result

})

export default Slider.reducer