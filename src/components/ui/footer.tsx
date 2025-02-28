const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-accent p-4 px-8 text-[0.825rem] opacity-75">
      © {currentYear} Copyright <span className="font-semibold">PS Store</span>
    </div>
  );
};

export default Footer;
