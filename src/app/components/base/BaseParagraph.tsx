import { FC, ReactNode } from "react"

export const BaseParagraph: FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className, ...prop }) => {
    return <p className={`my-[5px] ${className}`} >
        {children}
    </p>
}


