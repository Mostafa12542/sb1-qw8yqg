import React from 'react';

const footerLinks = {
  about: [
    { label: 'How it works', href: '#' },
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
  resources: [
    { label: 'Blog', href: '#' },
    { label: 'Developers', href: '#' },
    { label: 'Partners', href: '#' },
  ],
  connect: [
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-50 mt-20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 capitalize">
                {category === 'about' ? 'About Jooogle One' : category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-600 hover:text-blue-600">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          © {new Date().getFullYear()} Jooogle One. All rights reserved.
        </div>
      </div>
    </footer>
  );
}