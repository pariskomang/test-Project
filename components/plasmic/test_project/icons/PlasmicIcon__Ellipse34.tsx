// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse34Icon(props: Ellipse34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"8.879"}
        cy={"8.879"}
        r={"8.879"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse34Icon;
/* prettier-ignore-end */
