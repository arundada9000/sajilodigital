import type { Metadata } from "next";
import StatusClient from "./StatusClient";

export const metadata: Metadata = {
    title: "System Status | Sajilo Digital",
    description: "Live system diagnostics and neural network telemetry for Sajilo Digital's core architecture.",
    openGraph: {
        title: "System Diagnostics - Sajilo Digital",
        description: "Operational status of our digital ecosystem.",
    },
};

export default function StatusPage() {
    return <StatusClient />;
}
