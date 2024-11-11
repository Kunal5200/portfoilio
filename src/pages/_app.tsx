import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AnimatedCursor from "react-animated-cursor";
import "animate.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}
