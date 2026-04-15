import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { Chatbot } from "@/components/Chatbot";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import Programme from "@/pages/Programme";

import FAQ from "@/pages/FAQ";
import Booking from "@/pages/Booking";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/programme" component={Programme} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/testimonials">{() => { window.location.replace(import.meta.env.BASE_URL + "gallery"); return null; }}</Route>
      <Route path="/faq" component={FAQ} />
      <Route path="/booking" component={Booking} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <div className="bg-background min-h-screen text-foreground font-sans transition-colors duration-500">
              <ScrollToTop />
              <Navigation />
              <main>
                <Router />
              </main>
              <Footer />
              <Chatbot />
            </div>
          </WouterRouter>
          <Toaster />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
