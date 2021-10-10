import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { IconType } from "react-icons";
import { ColorMode } from "../hooks/useColorMode";

export type IconLinkProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    Icon: IconType,
    link: string,
    colorMode: ColorMode
}

export const IconLink: FC<IconLinkProps> = ({
    Icon,
    link,
    colorMode = ColorMode.dark,
    className = ""
}) => {

    return (
        <a href={link} className={`flex flex-col items-center justify-center ${className}`}>
            <Icon className={`${colorMode === ColorMode.dark ? 'text-white' : 'text-black'} text-xl hover:text-3xl transition-all duration-500`}
                style={{
                    filter: colorMode === ColorMode.dark ?
                        `drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.5)) drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.5))` :
                        `drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.5)) drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.5))`
                }} />
        </a>
    );
}