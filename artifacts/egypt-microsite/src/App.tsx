import { Route, Switch } from "wouter";
import { Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import Home from "@/pages/Home";
import Experience from "@/pages/Experience";
import Stories from "@/pages/Stories";
import Science from "@/pages/Science";
import Book from "@/pages/Book";
import FAQPage from "@/pages/FAQPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <div className="bg-background min-h-screen text-foreground font-sans transition-colors duration-500">
              <Navigation />
              <main>
                <Switch>
                  <Route path="/" component={Home} />
                  <Route path="/experience" component={Experience} />
                  <Route path="/stories" component={Stories} />
                  <Route path="/science" component={Science} />
                  <Route path="/book" component={Book} />
                  <Route path="/faq" component={FAQPage} />
                  <Route component={NotFound} />
                </Switch>
              </main>
              <Footer />
            </div>
          </WouterRouter>
          <Toaster />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
