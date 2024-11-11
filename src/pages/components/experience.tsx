import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import profile from "@/profile2.jpg";
import Image from "next/image";
import { COLORS } from "../utils/colors";
import { plus, roboto } from "../utils/fonts";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import SkillMeter from "./skillMeter";
import { data } from "@/assests/data";
interface ExperienceProps {
  experience: number;
}
const Experience = ({ experience }: ExperienceProps) => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid2 container spacing={8} alignItems={"center"}>
          <Grid2 size={4}>
            <Typography
              color={COLORS.WHITE}
              fontSize={45}
              sx={{ fontFamily: roboto.style, fontWeight: 550 }}
            >
              {experience} Years
            </Typography>
            <Typography
              color={COLORS.WHITE}
              fontSize={45}
              sx={{ fontFamily: roboto.style, fontWeight: 550 }}
            >
              Experience On
            </Typography>
            <Typography
              color={COLORS.WHITE}
              fontSize={45}
              sx={{ fontFamily: roboto.style, fontWeight: 550 }}
            >
              Frontend
            </Typography>
            <Typography
              color={COLORS.WHITE}
              fontSize={45}
              sx={{ fontFamily: roboto.style, fontWeight: 550 }}
            >
              Development.
            </Typography>
            <Typography
              sx={{
                fontSize: 18,
                color: COLORS.WHITE,
                mt: 2,
                lineHeight: 1.7,
              }}
            >
              Experienced web developer with 2.6 years in creating responsive,
              dynamic web applications focused on user experience and modern
              design.
            </Typography>
            <Button
              endIcon={<ArrowUpward />}
              sx={{
                mt: 2,
                border: "1px solid #fff",
                borderRadius: 8,
                width: 150,
                p: 2,
                color: COLORS.WHITE,
                ":hover": {
                  border: `1px solid ${COLORS.YELLOW}`,
                  backgroundColor: COLORS.YELLOW,
                  color: COLORS.DARKBLUE,
                },
                fontFamily: plus.style,
                fontWeight: 600,
              }}
            >
              Hire Me
            </Button>
          </Grid2>
          <Grid2 size={4}>
            <Box
              sx={{
                height: "100vh",
                overflow: "hidden",
                position: "relative",
                ":hover": {
                  ".bg_image": {
                    transform: "scale(1.1)",
                  },
                },
                ".bg_image": {
                  transition: "0.5s ease all",
                },
                borderRadius: 5,
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${profile.src})`,
                  height: "100%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="bg_image"
              ></Box>
            </Box>
          </Grid2>
          <Grid2 size={4}>
            {data.skills.map((val, i) => (
              <Stack spacing={2} key={i} mb={4}>
                <SkillMeter label={val.label} value={val.value} />
              </Stack>
            ))}
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default Experience;
