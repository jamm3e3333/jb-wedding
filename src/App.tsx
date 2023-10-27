import RegionButton from './components/ui/region.button';
import React from 'react';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <div>
            <RegionButton />
            <Outlet />
        </div>
    );
};

export default App;
