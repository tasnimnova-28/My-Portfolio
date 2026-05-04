import type { Metadata } from "next";
import "./globals.css";

// ────────────────────────────────────────────────────
// 📝 REPLACE: Update with your own name, description,
//    and URL for proper SEO metadata
// ────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tasnim Nova | Aspiring Web Developer",
  description:
    "CSE student & aspiring web developer passionate about building beautiful, responsive web experiences.",
  keywords: ["web developer", "portfolio", "React", "Next.js", "frontend"],
  authors: [{ name: "Tasnim Nova" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-text font-body antialiased">{children}</body>
    </html>
  );
}
