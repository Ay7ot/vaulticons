import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaceholder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M3 3h18v18H3z" />
  </svg>
);
export default SvgPlaceholder;
