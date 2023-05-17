import Link from "next/link";
import Image from "next/image";
import React from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

interface MItem {
  title: string;
  href: string;
  img: string;
  type: string;
}

const item = ({ title,href,img,type }:MItem) => {
  let aa = /\/\d+\//gi
  const newHref = JSON.parse(JSON.stringify(String(href).match(aa)))[0].replace(/\//gi,"")
  const link = `${process.env.LOCAL}library/${newHref}`
  
  return (     
    <Link className={cn("space-y-3")} href={link}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="truncate overflow-hidden rounded-md">
            <Image
              src={img ? img : "https://peugeot.navigation.com/static/WFS/Shop-CitroenEMEA-Site/-/Shop-CitroenEMEA/en_GB/Product%20Not%20Found.png"}
              alt={title}
              width={300}
              height={300}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                
              )}
            />
          </div>
        </ContextMenuTrigger>
        
      </ContextMenu>
      <div className="break-all space-y-1 text-sm">
        <h3 className="truncate overflow-hidden  line-clamp-1 font-medium leading-none">{title}</h3>
        
        <Badge variant="outline">{type}</Badge>
      </div>
    </Link>               
  );
};

export default item;
