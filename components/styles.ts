export const styles = {
    root: {
        backgroundBlendMode: "normal",
    },
    nav: {
        background: "#005986",
        height: "11vh"
    },
    cloudIcon: {
        width: "4rem",
        marginLeft: "7.3em",
        mt: 1,
        height: "4em"
    },
    secondNav: {
        height: "5vh",
        background: "#337a9e",
        color: "white"
    },
    secondNavTxt: {
        ml: { xs: 10, sm: 12, md: 20, lg: 28 },
        height: "100%",
        fontSize: "15px",
        sup: { fontSize: "10px" },
    },
    thirdNav: {
        pl: { xs: 0, md: 15 }, pr: { xs: 0, md: 15 },
        height: "5vh",
        background: "#003550",
        color: "white",
        display: 'flex',
        transition: "all 0.5s ease-in-out"
    },
    thirdNav_item: {
        flexGrow: 1,
        flexBasis: 100,
        fontSize: { xs: "10px", sm: "13px", md: "14px", lg: "16px" },
        cursor: "pointer",
        "&:hover": {
            textDecoration: "underline #ffff 16%",
            textUnderlineOffset: "12px",
        },
    },
    componentContainer: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "flex-start",
        background: "linear-gradient(#0b6596, #d8eeee)",
        backgroundAttachment: "fixed"
    },
    todaysComponentContainer: {
        width: { xs: "95%", sm: "95%", md: "90%", lg: "60em" },
        mt: 5,
        display: 'flex',
        flexDirection: "column",
        alignItems: "flex-start",
        background: "white",
        borderRadius: 2,
        pl: 2,
        pt: 2,
        mb: 5
    },
    todaysTxt: {
        width: "100%",
        display: "flex", justifyContent: "flex-start",
        fontSize: { xs: "15px", sm: "17px", md: "20px" },
        fontWeight: 600
    },
    reportData: {
        width: "100%",
        overflowY: "auto",
        height: "inherit"
    },
    txt: {
        color: "#666", fontWeight: 400, fontSize: { xs: "13px", sm: "14px", md: "18px" },
    },
    deg: {
        fontSize: { xs: "18px", sm: "20px", md: "25px", lg: "28px" }, fontWeight: 500, color: '#1b4de4',
        span: { fontSize: "18px", pl: 0.5 }
    },
    feelLike: {
        p: 4
    },
    feelLike_deg: {
        fontSize: "45px",
        fontWeight: 600,
        sup: {
            fontSize: "35px"
        },
    },

    topContainer: {
        // width: { xs: "98%", sm: "80%", md: "60%", lg: "50%" },
        width: "inherit",
        mt: "2rem",
        height: "300px",
        position: "relative",
        borderRadius: "10px",
    },
    topContainerBoxOne: {
        width: "100%",
        background: "#1f4e57",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", sm: "flex-start" },
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        color: "#fff",
        gap: '10px'
    },
    topContainerBoxTwo: {
        width: "98%",
        background: "#1f4e57",
        height: "50px",
        position: "absolute",
        bottom: "10px",
        mx: { xs: "4px", sm: "10px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        gap: "10px",
        color: "#fff",
    },
    topTextContainer: {
        background: "linear-gradient(to right,#1d7199,#60c2d7)",
        height: "250px",
        display: "flex",
        gap: "50px",
        justifyContent: "space-between",
    },
    textOne: {
        fontSize: { xs: "60px", sm: "90px" },
        fontWeight: "400",
        textShadow: "2px 2px 2px #555",
        color: "#fff",
        lineHeight: "100px",
    },
    textTwo: {
        fontSize: { xs: "18px", sm: "30px" },
        fontWeight: "400",
        textShadow: "2px 2px 2px #555",
        color: "#fff",
    },
    textContainer: { display: "flex", flexDirection: "column", ml: "20px" },
    topContainerText: {
        fontSize: { xs: "14px", sm: "16px" },
        fontWeight: "400",
        pl: { xs: '0px', sm: '10px' }
    },
    topContainerTextTwo: {
        fontSize: { xs: "12px", sm: "14px" },
        fontWeight: "400",
    },
    image: { width: "60px", height: "60px" },
    tableHeading: {
        fontSize: { xs: "14px", sm: "18px", lg: "22px" },
        fontWeight: "bold",
    },
    forcastBtn: {
        textTransform: "none",
        color: "#fff",
        background: "#1b4de4",
        "&:hover": {
            background: "#1b4de4",
        },
        p: "6px 15px",
        borderRadius: "20px",
        mt: "10px",
    },
    tablecellText: {
        fontSize: { xs: "12px", sm: "16px" },
        fontWeight: "bold",
        color: "#ccc",
    },
    tablecellTextOne: {
        fontSize: { xs: "15px", sm: "25px" },
        fontWeight: "bold",
        color: "#555",
    },
    colorweatherTodayContainer: {
        display: "flex",
        justifyContent: "space-between",
        pt: '20px'
    },
    weatherTodayImage: { width: '100px', ml: '40px' },
    FeelText: { fontSize: { xs: '14px', sm: '16px' }, color: '#000', lineHeight: '6px' },
    FeelsText: { fontSize: { xs: '14px', sm: '16px' }, color: '#000' },
    weatherTodayDegreetext: { fontSize: { xs: '45px', sm: '60px' }, fontWeight: 'bold' },
    iconColor: {
        color: '#e87538'
    },
    weatherTodayListContainer: {
        py: 0,
        width: '100%',
        maxWidth: 360,
        borderRadius: 2,
        borderBottom: '1px solid #ccc',




    },
    listItem: { display: 'flex', justifyContent: 'space-between' },
    mainListContainer: { display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { xs: 'center', sm: 'space-between' } }

}