"use client";

import { useState, useEffect } from "react";
import CustomContextMenu from "./CustomContextMenu";
import SettingsSheet from "../header/SettingsSheet";

export default function GlobalSystems() {
    const [settingsOpen, setSettingsOpen] = useState(false);

    useEffect(() => {
        const handleToggleSettings = () => {
            setSettingsOpen(prev => !prev);
        };

        window.addEventListener('toggle-settings', handleToggleSettings);
        return () => window.removeEventListener('toggle-settings', handleToggleSettings);
    }, []);

    return (
        <>
            <CustomContextMenu />
            <SettingsSheet open={settingsOpen} onOpenChange={setSettingsOpen} />
        </>
    );
}
