interface Time {
    begin: string,
    end: string
}

type Day = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";

const CompanyTime: Record<Day, Time> = {
    monday: { begin: "10/10/2020 10:00", end: "10/10/2020 18:00" },
    tuesday: { begin: "10/10/2020 10:00", end: "10/10/2020 18:00" },
    wednesday: { begin: "10/10/2020 10:00", end: "10/10/2020 18:00" },
    thursday: { begin: "10/10/2020 10:00", end: "10/10/2020 18:00" },
    friday: { begin: "10/10/2020 10:00", end: "10/10/2020 18:00" },
    saturday: { begin: "10/10/2020 10:00", end: "10/10/2020 18:00" },
    sunday: { begin: "10/10/2020 10:00", end: "10/10/2020 18:00" }
}