import { LinearProgress, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../utils/colors";
import { roboto } from "../utils/fonts";
interface skillMeterProps {
  label: string;
  value: number;
}
const SkillMeter = ({ label, value }: skillMeterProps) => {
  return (
    <div>
      <Typography
        sx={{ fontSize: 20, color: COLORS.WHITE, fontFamily: roboto.style }}
      >
        {label}
      </Typography>
      <LinearProgress
        value={value}
        variant="determinate"
        sx={{
          mt: 2,

          backgroundColor: "#ffffff49",
          "& .MuiLinearProgress-bar": {
            backgroundColor: COLORS.WHITE,
            borderRadius: 2,
          },
          borderRadius: 2,
        }}
      />
    </div>
  );
};

export default SkillMeter;
