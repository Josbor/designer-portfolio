import * as React from "react"
import type { JSX } from "react/jsx-runtime"

interface LogoProps extends JSX.IntrinsicAttributes, React.SVGProps<SVGSVGElement>
{
    fill1?: React.SVGProps<SVGSVGElement>[ "fill" ];
    fill2?: React.SVGProps<SVGSVGElement>[ "fill" ];
    fill3?: React.SVGProps<SVGSVGElement>[ "fill" ];
}

const Logo = ( { fill1, fill2, fill3, ...props }: LogoProps ) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 864 864"
        { ...props }
    >
        <g clipPath="url(#clip0_35_2)">
            <path
                fill={ fill1 || "#E53D8B" }
                d="M53.163 212.748C26.158 104.677 107.882 0 219.3 0H864L304.229 319.876c-98.503 56.274-223.541 2.922-251.066-107.128Z"
            />
            <path
                fill={ fill2 || "#3190D2" }
                d="M810.837 651.252C837.842 759.323 756.118 864 644.748 864H0l559.771-319.876c98.503-56.274 223.541-2.922 251.066 107.128Z"
            />
            <path
                fill={ fill3 || "#F4822C" }
                d="M539.976 432c0 59.667-48.356 108.024-108.023 108.024-59.62 0-107.977-48.357-107.977-108.024 0-59.62 48.357-107.976 107.977-107.976 59.714 0 108.023 48.356 108.023 107.976Z"
            />
        </g>
    </svg>
)
export default Logo