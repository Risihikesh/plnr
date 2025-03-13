"use client";

import { useEffect } from "react";

export default function DPRFix() {
    useEffect(() => {
        if (typeof document !== "undefined") {  
            console.log("DPR:", window.devicePixelRatio);
            if (window.devicePixelRatio > 1) {
                document.body.style.zoom = `${1 / window.devicePixelRatio}`;
            }
        }
    }, []);

    return null; // No UI needed
}
