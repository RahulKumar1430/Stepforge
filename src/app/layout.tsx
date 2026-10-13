import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./styles.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: { default: "StepForge | Walk with intention", template: "%s | StepForge" },
  description: "A focused Android pedometer and walking coach for everyday movement.",
  metadataBase: new URL("https://stepforge.app"),
  openGraph: { title: "StepForge", description: "A focused Android pedometer and walking coach.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${display.variable}`}>{children}</body></html>;
}
