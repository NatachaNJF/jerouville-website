import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceEgouts from "./pages/services/ServiceEgouts";
import ServiceCanalisations from "./pages/services/ServiceCanalisations";
import ServiceCables from "./pages/services/ServiceCables";
import ServiceVoiries from "./pages/services/ServiceVoiries";
import ServiceVoiesFerrees from "./pages/services/ServiceVoiesFerrees";
import ServiceAmenagement from "./pages/services/ServiceAmenagement";
import ServiceGenieCivil from "./pages/services/ServiceGenieCivil";
import APropos from "./pages/APropos";
import PerformanceCO2 from "./pages/PerformanceCO2";
import Emploi from "./pages/Emploi";
import Devis from "./pages/Devis";
import Contact from "./pages/Contact";
import RGPD from "./pages/RGPD";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/services/egouts" component={ServiceEgouts} />
        <Route path="/services/canalisations" component={ServiceCanalisations} />
        <Route path="/services/cables" component={ServiceCables} />
        <Route path="/services/voiries" component={ServiceVoiries} />
        <Route path="/services/voies-ferrees" component={ServiceVoiesFerrees} />
        <Route path="/services/amenagement" component={ServiceAmenagement} />
        <Route path="/services/genie-civil" component={ServiceGenieCivil} />
        <Route path="/a-propos" component={APropos} />
        <Route path="/performance-co2" component={PerformanceCO2} />
        <Route path="/emploi" component={Emploi} />
        <Route path="/devis" component={Devis} />
        <Route path="/contact" component={Contact} />
        <Route path="/rgpd" component={RGPD} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
