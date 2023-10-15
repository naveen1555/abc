import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

function FacebookCircularProgress(
  props: CircularProgressProps,
  value,
  value2,
  showText
) {
  return (
    <Box sx={{ position: "relative", display: "flex" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={250}
        thickness={5}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#1E33F2" : "#308fe8",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "square",
          },
        }}
        size={250}
        thickness={7}
        {...props}
        value={props.value}
      />

      <CircularProgress
        variant="determinate"
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === "light" ? "#0f0" : "#0f0"),
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "square",
          },
        }}
        size={250}
        thickness={9}
        {...props}
        value={props.value2}
      />

      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          style={{
            paddingBottom: "5px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "17.9421px",
            lineHeight: "31px",
            letterSpacing: "0.01em",
            color: "rgba(0, 0, 0, 0.87)",
          }}
        >
          {`${Math.round(props.value)}%`}

          {props.showText && (
            <div
              style={{
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "9.14137px",
                lineHeight: "12px",
                color: "#000",
              }}
            >
              Total New <br />
              Customers
            </div>
          )}
        </Typography>
      </Box>
    </Box>
  );
}

export default function CustomizedProgressBars({ value, value2, showText }) {
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <FacebookCircularProgress
        value={value}
        value2={value2}
        showText={showText}
      />
    </Box>
  );
}
