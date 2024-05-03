import React, { ReactNode } from 'react';

interface WithoutSidebarProps {
    children?: ReactNode;
}

const WithoutSidebar: React.FC<WithoutSidebarProps> = ({
    children,
}) => {
    return (
        <div style={{ height: "100vh" }}>
            {children}
        </div>
    );
}

export {WithoutSidebar};