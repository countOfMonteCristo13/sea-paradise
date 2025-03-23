import { infoCard } from "../models/infoCard";
import { IoTvOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { LuParkingSquare } from "react-icons/lu";
import { TbAirConditioning, TbMeterSquare } from "react-icons/tb";
import { GiBarbecue } from "react-icons/gi";
import { BiWater } from "react-icons/bi";
import { PiCookingPot } from "react-icons/pi";


export const infoCards: infoCard[] = [
    {
        title:'150m',
        icon: BiWater
    },
    {
        title:'40',
        icon: TbMeterSquare
    },
    {
        title:'TV',
        icon: IoTvOutline
    },
    {
        title:'WiFi',
        icon: FaWifi
    },
    {
        title:'Klima uredjaj',
        icon: TbAirConditioning
    },
    {
        title:'Kuhinja',
        icon: PiCookingPot
    },
    {
        title:'Besplatan Parking',
        icon: LuParkingSquare
    },
    {
        title:'Roštilj',
        icon: GiBarbecue
    },
]