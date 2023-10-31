"use client";

import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./ui/button";
import { BsHouseCheckFill } from "react-icons/bs";

const montserrat = Montserrat({ subsets: ["latin"] });

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 45) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav
      className={
        shadow
          ? "fixed top-0 w-full h-20 shadow-xl z-[100] bg-white"
          : "w-full h-20"
      }
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto h-full w-full px-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image
              src="/waterstreet-mortgage-nav-logo.png"
              width={50}
              height={50}
              alt="Waterstreet Mortgage Logo"
            />
            <Image
              src="/waterstreet-mortgage-text.png"
              width={250}
              height={250}
              alt="Waterstreet Mortgage Logo"
              className="sm:w-full h-full w-3/4"
            />
            {/* <p className={cn(montserrat.className, "uppercase font-bold sm:flex hidden sm:text-xl")}>Watersteet Mortgage</p> */}
          </div>
        </Link>
        {/* Navigation Menu Items on Large Devices */}
        <div className="lg:block hidden">
          <NavigationMenu className="z-20">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Loan Programs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/loan-programs"
                        >
                          <BsHouseCheckFill className="text-2xl" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Loans we Offer
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Click here to view all of the loans we offer.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/loan-programs"
                      title="Shining Star Hero Program"
                    >
                      Special loan program to server educators, first
                      responders, healthcare workers, law enforcement, active
                      duty military, and veterans.
                    </ListItem>
                    <ListItem href="/loan-programs" title="FHA Loan">
                      Type of mortgage that requires a smaller down payment and
                      is insured by the government, making it accessible for
                      homebuyers with lower savings.
                    </ListItem>

                    <ListItem href="/loan-programs" title="Conventional Loan">
                      Type of mortgage not backed by the government, typically
                      requiring a larger down payment and stricter credit
                      qualifications.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Link href="/contact">
          <div className="lg:flex hidden">
            <Button>Apply Today</Button>
          </div>
        </Link>

        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger>
              <GiHamburgerMenu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent className="h-screen">
              <SheetHeader>
                <SheetTitle>
                  <div
                    className={cn(
                      montserrat.className,
                      "flex font-extrabold gap-3 uppercase mt-10 items-center"
                    )}
                  >
                    <Image
                      src="/waterstreet-mortgage-nav-logo.png"
                      alt="Logo"
                      width={50}
                      height={50}
                    />
                    <Link href="/">
                      <Image
                        src="/waterstreet-mortgage-text.png"
                        width={250}
                        height={250}
                        alt="Waterstreet Mortgage Logo"
                        className="w-full h-full"
                      />
                    </Link>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <ul
                    className={cn(
                      montserrat.className,
                      "font-bold text-black text-xl gap-10 flex flex-col mt-20"
                    )}
                  >
                    <li>
                      <Link href="/loan-programs">Mortgages</Link>
                    </li>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                  <div className="mt-10 flex gap-6 mx-auto justify-center">
                    <Link href="/contact">
                      <Button>Apply Today</Button>
                    </Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
