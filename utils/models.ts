import { Type } from "./enums";

export interface Links{
    Code:number,
    Name:string,
}
export interface data{
    Id:number,
    Name:string,
    Image:string,
    Type:Type,
    Link:Links,
}