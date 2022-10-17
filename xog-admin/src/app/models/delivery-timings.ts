import { BaseFiler } from "./common";

export class WeekDayStatus
{
    DayId: number;
    IsDayActive: boolean;
    DayName: string;
    DeliveryTimings: DeliveryTiming;
}

export class DeliveryTiming 
{
    Id: number;
    DayId: number;
    FromHours: number;
    FromMinutes: number;
    ToHours: number;
    ToMinutes: number;
    IsActive: boolean;
}



export class DeliveryTimingFilter extends BaseFiler 
{
    Ids: number[];
    DayId: number;
    FromHours: number;
    FromMinutes: number;
    ToHours: number;
    ToMinutes: number;
    IsActive: boolean;
}