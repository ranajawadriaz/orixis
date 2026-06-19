import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-orixis-bg px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl sm:text-8xl font-display font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-orixis-text mb-2 font-semibold">Page not found</p>
        <p className="text-orixis-text-muted mb-8">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
            <Link to="/">
              <Home className="mr-2" size={18} />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-orixis-text/30 text-orixis-text hover:bg-orixis-text/10">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
