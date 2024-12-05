import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import { Tour } from "@/components/Tour";
import { Page } from "@/components/Page";
import { Hero } from "@/components/Hero";
import { Grid } from "@/components/Grid";
import { Feature } from "@/components/Feature";
import { Testimonial } from "@/components/Testimonial";
import { RecommendedTours } from "@/components/RecommendedTours";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EF Educational Tours",
  description: "Explore the world with EF Educational Tours.",
};

// Configure Storyblok
storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "ca",
    // Ensures fresh data in development, cached in production
    fetch: (input: any, init?: any): Promise<Response> => {
      return fetch(input, {
        ...init,
        cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
      });
    },
  },
  components: {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommended_tours: RecommendedTours,
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="en" className="h-full scroll-smooth">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
        >
          {/* Header */}
          <header className="bg-blue-600 text-white shadow-lg">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
              <Link href="/" className="text-2xl font-extrabold tracking-tight">
                EF Tours
              </Link>
              <div className="flex space-x-6">
                <Link
                  href="/tours"
                  className="text-lg font-medium hover:underline transition duration-200"
                >
                  Tours
                </Link>
              </div>
            </nav>
          </header>

          {/* Main Content */}
          <main className="container mx-auto py-8 px-6 lg:px-12">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-gray-400 text-sm py-6">
            <div className="container mx-auto text-center">
              <p className="mb-2">
                &copy; 2024 Blaze Pavars. All rights reserved.
              </p>
            </div>
          </footer>

          {/* Load the Storyblok Bridge script. 
             In production, consider loading this only if "_storyblok" is present in the URL for performance. */}
          <script src="//app.storyblok.com/f/storyblok-v2-latest.js" async></script>

          {/* Initialize the Storyblok Bridge if inside the Storyblok editor (_storyblok param present) */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  if (window.location.search.includes('_storyblok')) {
                    const storyblokInstance = new window.StoryblokBridge();

                    // Listen to events:
                    // "input" = live content updates (no reload needed),
                    // "published" or "change" = content saved/published, reload to fetch updated data
                    storyblokInstance.on(['input', 'published', 'change'], (event) => {
                      if (event.action === 'input') {
                        console.log("Live content update:", event.story?.content);
                        // No reload required; storyblokEditable components should reflect changes instantly.
                      } else {
                        // For published or change, reload to show the new draft/published state.
                        location.reload(true);
                      }
                    });
                  }
                })();
              `,
            }}
          />
        </body>
      </html>
    </StoryblokProvider>
  );
}