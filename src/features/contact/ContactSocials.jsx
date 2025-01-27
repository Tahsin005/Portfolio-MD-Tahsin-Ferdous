function ContactSocials() {
  const socials = [
    {
      social: "email",
      un: "tahsin.ferdous3546@gmail.com",
      href: "mailto:tahsin.ferdous3546@gmail.com",
    },
    {
      social: "whatsapp",
      un: "+8801795368447",
      href: "#",
    },
    {
      social: "github",
      un: "tahsin005",
      href: "https://www.github.com/tahsin005/",
    },
    {
      social: "linkedin",
      un: "md-tahsin-ferdous",
      href: "https://www.linkedin.com/in/manav-shete-aa600a194/",
    },
    {
      social: "instagram",
      un: "tahsin_exe",
      href: "https://www.instagram.com/tahsin_exe/",
    },
    {
      social: "medium",
      un: "tahsin.ferdous3546",
      href: "https://medium.com/@tahsin.ferdous3546",
    },
    {
      social: "dev.to",
      un: "tahsin005",
      href: "https://dev.to/api/articles?username=tahsin005",
    },
  ];
  return (
    <div className="flex flex-col line-container">
      <p className="text-3xl text-textColor">Reach Out Via Socials </p>
      <div className="flex flex-col pt-5 space-y-2">
        <p className="text-base line text-textColor md:text-2xl">
          .socials &#123;{" "}
        </p>
        {socials.map((social) => {
          return (
            <div className="text-base line md:text-2xl" key={social.social}>
              <span className="pl-5 text-textColor md:pl-8">
                {social.social}:
              </span>
              <a
                className="pl-2 text-base text-accentColor hover:underline md:text-2xl"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.un};
              </a>
            </div>
          );
        })}
        <p className="text-base line text-textColor md:text-2xl">&#125;</p>
      </div>
    </div>
  );
}

export default ContactSocials;
