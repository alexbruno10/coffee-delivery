import { ReactNode } from "react";
import { IconContainer, IconBgContainer } from "./style"

interface IconTitleProps {
    icon: ReactNode;
    iconColor: string;
    text: string;
}

export default function IconTitle({ icon, text, iconColor}: IconTitleProps) {
    return (
        <>
            <IconContainer>
                <IconBgContainer color={iconColor}>{icon}</IconBgContainer>
            {text}
            </IconContainer>        
        </>
    )
}