import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Church } from "lucide-react";

import { Input } from "./input";
import { Button } from "./button";
import { Label } from "./label";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "الأخبار", path: "/news" },
    { name: "القداسات", path: "/masses" },
    { name: "الخطب", path: "/sermons" },
    { name: "معرض الصور", path: "/gallery" },
    { name: "الخدمات", path: "/services" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="border-border sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex cursor-pointer items-center gap-2">
            <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
              <Church className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-primary tracking-tight">
                كنيسة مار جرجس
              </span>
              <span className="text-muted-foreground text-xs">الكابلات</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-lg px-4 py-2 transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-primary text-white shadow-md"
                    : "text-foreground hover:bg-secondary hover:shadow-sm"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              className="hover:bg-secondary rounded-lg p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-border overflow-hidden border-t py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-right transition-all duration-300 ${
                    isActive(link.path)
                      ? "bg-primary text-white shadow-md"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
