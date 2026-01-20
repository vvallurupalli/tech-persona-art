const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Venkat V. Built with passion for technology.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
