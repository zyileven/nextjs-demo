import React, { ReactNode } from 'react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="border-[1px] border-solid border-[#ff0] pl-[20px]">
            <div>layout3</div>
            {children}
        </div>
    );
};

export default Layout;