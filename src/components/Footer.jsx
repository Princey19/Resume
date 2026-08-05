function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://wa.link/660kaq"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-accent transition duration-300"
          >
            Whatsapp
          </a>
          <a
            href="https://github.com/Princey19"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-accent transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://x.com/Thoth_d1"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-accent transition duration-300"
          >
            Twitter
          </a>
        </div>
        <p id="current-year" className="text-gray-500 text-sm">
          &copy; {currentYear} opuiyo prince.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
