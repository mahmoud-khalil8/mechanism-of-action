"use client";

import * as React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

  import Logo from "./logo"

  const components: { title: string, description: string}[] = [
    {
        title: "Frozen",
    
        description:
          "Recommended template for most use cases. Includes all the components you need to get started.",
      },
      {
        title: "Swift",
    
        description:
          "A template with a minimal set of components. Use this template if you want to build your own components.",
      },
      {
        title: "Tuscany",
    
        description:
          "Advanced template with more components and features. Use this template if you want to build a complex UI.",
      },
      {
        title: "Amber",
    
        description: "Great for building a marketing or landing page.",
      },
      {
        title: "Tide",
    
        description:
          "Layered template with a sidebar navigation. Great for building a dashboard or admin panel.",
      },
      {
        title: "Mint",
     
        description:
          "Nice template for building a blog or a content-heavy website.",
      },
  ]



  export function NavigationMenuBar() {
    return (
      <NavigationMenu>
        <NavigationMenuList
        className="hidden md:flex md:space-x-4"
        
        
        
        >
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
              className="font-medium text-lg"
              >
                Home
              </NavigationMenuLink>
            </Link>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Logo  />
                      <div className="mb-2 mt-4 text-lg font-medium">
                       Bird Software
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                      eCommerce platform for selling digital products.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem  title="Introduction">
                    Learn about the basics of Bird.
                </ListItem>
                <ListItem  title="Demo">
                  How to build a store in 60 seconds with Bird
                </ListItem>
                <ListItem  title="Community">
                    Join the community and get help or support.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        
            
          <NavigationMenuItem>
          <NavigationMenuTrigger className=" font-medium text-lg ml-7">Insights</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">

              <ListItem href="../../comp/data" title="Data Exploration">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="../../comp/problem" title="Problem">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="../../comp/analysis&visualization" title="analysis & visualization">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="../../comp/model" title="model">
                How to install dependencies and structure your app.
              </ListItem>

            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className=" font-medium text-lg ml-7">Research</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">

              <ListItem href="../../services/research" title="References">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="../../services/useCases" title="Use cases">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>


            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
            
          <NavigationMenuItem>
            <Link href="../../Prediction" legacyBehavior passHref>
              <NavigationMenuLink
              className="font-medium text-lg ml-7"
              >
                Prediction
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>


          <NavigationMenuItem>
            <Link href="../../overview" legacyBehavior passHref>
              <NavigationMenuLink
              className=" font-medium text-lg ml-7"
              >
                Overview
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          


        
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
   
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
    )
  })
  ListItem.displayName = "ListItem"