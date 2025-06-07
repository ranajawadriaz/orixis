
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-orixis-bg">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-orixis-text-muted mb-8">Oops! Page not found</p>
        <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
          <a href="/" className="flex items-center">
            Return to Home
            <ArrowRight className="ml-2" size={20} />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
