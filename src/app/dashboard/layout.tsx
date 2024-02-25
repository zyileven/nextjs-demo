import React, { ReactNode } from 'react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="border-[1px] border-solid border-[#f00] p-[10px] pl-[20px]">
            <div>
                layout2
            </div>
            {children}
        </div>
    );
};

export default Layout;