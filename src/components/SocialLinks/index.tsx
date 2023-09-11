import { socialLinks } from "./Data";

export default function SocialLinks() {
    return (
      <>
        <div id="social-links" className="social-links">
          {socialLinks.map((item, key) => (
                <a key={key} href={item.href} className={item.className}>
                    {item.icon}
                </a>
            ))}
        </div>
      </>
    );
}
