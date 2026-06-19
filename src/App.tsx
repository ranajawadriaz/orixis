import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import MuiThemeBridge from "@/theme/MuiThemeBridge";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedRoutes from "@/components/AnimatedRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Deferred so its Material UI dependency stays out of the initial bundle.
const Chatbot = lazy(() => import("./components/Chatbot"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <MuiThemeBridge>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen bg-orixis-bg text-orixis-text">
              <Navbar />
              <main>
                <AnimatedRoutes />
              </main>
              <Footer />
              <Suspense fallback={null}>
                <Chatbot />
              </Suspense>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </MuiThemeBridge>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
