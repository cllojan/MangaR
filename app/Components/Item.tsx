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
    <div className={cn("space-y-3 m-1")}>
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="overflow-hidden rounded-md">
          <Image
            src={img}
            alt={title}
            width={400}
            height={400}
            className={cn(
              "h-auto w-auto object-cover transition-all hover:scale-105",
              
            )}
          />
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-40">
        <ContextMenuItem>Add to Library</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
           
            <ContextMenuSeparator />
            
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
      
      </ContextMenuContent>
    </ContextMenu>
    <div className="break-all space-y-1 text-sm">
      <h3 className="truncate font-medium leading-none">{title}</h3>
      <p className=" text-xs text-muted-foreground">{type}</p>
    </div>
  </div>               
  );
};

export default item;
