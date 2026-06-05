"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Logo from "@/assets/images/dream.png";
const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Browse Jobs",
    href: "/allRoute/browseJobs",
  },
  {
    name: "Company",
    href: "/allRoute/company",
  },
  {
    name: "Pricing",
    href: "/allRoute/pricing",
  },
  {
    name: "dashboard",
    href: "/allRoute/dashboard/recruiter",
  },
];

const Navbar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success('You are successfully SignOut')
    router.push('/auth/signin')
  };

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-4 md:px-6 lg:px-8 py-3">
      <div className="mx-auto max-w-310">
        <nav
          className="
            flex items-center justify-between
            rounded-2xl
            border border-white/10
            bg-black/40
            backdrop-blur-xl
            px-4 sm:px-6
            py-3
            shadow-[0_8px_30px_rgb(0,0,0,0.25)]
          "
        >
          {/* Logo */}
<Link
  href="/"
  className="flex items-center gap-3 shrink-0"
>
  {/* Logo */}
  <div className="relative h-10 w-30 md:h-12 md:w-35 overflow-hidden rounded-xl">
    <Image
      src={Logo}
      alt="Dream Job Logo"
      fill
      className="object-cover"
      priority
    />
  </div>
</Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "text-violet-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop User Section */}
          <div className="hidden xl:flex items-center gap-4">
            {user ? (
              <>
                <div className="flex items-center gap-3">
                  <Image
                    src={user?.image || "/avatar.png"}
                    alt={user?.name || "User"}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full border border-violet-500 object-cover"
                  />

                  <div className="max-w-[150px]">
                    <p className="truncate text-sm font-semibold text-white">
                      {user?.name}
                    </p>

                    <p className="truncate text-xs text-white font-semibold">
                      {user?.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleSignOut}
                  className="
                    rounded-xl
                    bg-red-500
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-red-600
                    cursor-pointer
                  "
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="
                    text-violet-400
                    hover:text-violet-300
                    font-medium
                    transition
                  "
                >
                  Sign In
                </Link>

                <Button
                  radius="md"
                  size="lg"
                  className="
                    bg-white
                    text-black
                    font-semibold
                  "
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              xl:hidden
              rounded-lg
              p-2
              text-white
              hover:bg-white/10
              transition
            "
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`
            xl:hidden
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            ${
              isOpen
                ? "max-h-[700px] opacity-100 mt-3"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              rounded-2xl
              border border-white/10
              bg-black/50
              backdrop-blur-xl
              p-5
            "
          >
            {/* User Info */}
            {user && (
              <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-5">
                <Image
                  src={user?.image || "/avatar.png"}
                  alt={user?.name || "User"}
                  width={50}
                  height={50}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="overflow-hidden">
                  <p className="truncate font-semibold text-white">
                    {user?.name}
                  </p>

                  <p className="truncate text-sm text-white font-semibold">
                    {user?.email}
                  </p>
                </div>
              </div>
            )}

            {/* Nav Links */}
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition ${
                    pathname === item.href
                      ? "text-violet-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Auth Section */}
            <div className="mt-6">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="
                    w-full
                    rounded-xl
                    bg-red-500
                    py-3
                    text-white
                    font-medium
                    transition
                    hover:bg-red-600
                  "
                >
                  Sign Out
                </button>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link
                    href="/auth/signin"
                    className="
                      text-center
                      rounded-xl
                      border
                      border-violet-500
                      py-3
                      text-violet-400
                    "
                  >
                    Sign In
                  </Link>

                  <Button
                    size="lg"
                    radius="md"
                    className="
                      w-full
                      bg-white
                      text-black
                      font-semibold
                    "
                  >
                    Get Started
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;