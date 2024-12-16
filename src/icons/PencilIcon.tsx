import { SVGProps } from "react";

export const PencilIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="m14.587 4.163-1.35 1.35a.352.352 0 0 1-.499 0L9.486 2.263a.352.352 0 0 1 0-.498l1.351-1.35a1.41 1.41 0 0 1 1.99 0l1.76 1.76c.55.548.55 1.438 0 1.99Zm-6.26-1.24L.632 10.618l-.621 3.56a.704.704 0 0 0 .814.814l3.56-.624 7.693-7.693a.352.352 0 0 0 0-.498L8.827 2.924a.355.355 0 0 0-.5 0ZM3.635 9.959a.408.408 0 0 1 0-.58l4.512-4.512a.408.408 0 0 1 .58 0 .408.408 0 0 1 0 .58L4.216 9.958a.408.408 0 0 1-.58 0Zm-1.058 2.464h1.407v1.063l-1.89.332-.911-.912.33-1.89h1.064v1.407Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h15v15H0z" />
      </clipPath>
    </defs>
  </svg>
);
