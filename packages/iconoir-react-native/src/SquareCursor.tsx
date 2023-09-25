import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSquareCursor = (passedProps: SvgProps, ref: Ref<Svg>) => {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        d="M21 12V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"
      />
      <Path
        stroke="currentColor"
        d="M20.879 16.917c.494.304.463 1.043-.045 1.101l-2.567.291-1.151 2.312c-.228.46-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgSquareCursor);
export default ForwardRef;