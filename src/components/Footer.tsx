import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href="mailto:xmrtsolutions@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              xmrtsolutions@gmail.com
            </a>
            <a
              href="https://wa.me/50661500559"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              +506 6150 0559
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The dApp Factory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};