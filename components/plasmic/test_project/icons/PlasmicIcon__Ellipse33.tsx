// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse33Icon(props: Ellipse33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
        cx={"6.874"}
        cy={"6.874"}
        r={"6.874"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse33Icon;
/* prettier-ignore-end */
