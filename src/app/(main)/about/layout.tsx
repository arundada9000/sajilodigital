import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "About Us",
    template: "%s | About - YourCompany",
  },
  description:
    "Learn about YourCompany, our mission, values, and the talented team behind our innovative web solutions. We are passionate about creating exceptional digital experiences.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
