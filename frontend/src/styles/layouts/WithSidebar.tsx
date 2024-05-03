import React, { ReactNode } from 'react';
import { SideBar } from "../../components/desktop/SideBar/SideBar";

interface WithSidebarProps {
    children?: ReactNode;
}

const WithSidebar: React.FC<WithSidebarProps> = ({
    children,
}) => {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <SideBar />
            <div style={{ flex: 1 }}>
                {children}
            </div>
        </div>
    );
}

export {WithSidebar};