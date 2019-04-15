import React, { FC } from "react";
import moment from "moment";

enum DateTimeFormat {
    Date = "LL",
    ShortDate = "ll",
    DateTime = "LLLL",
    ShortDateTime = "llll",
}
    
interface DateTimeOptions {
    /** the format of the date/time value used to display */
    format?: DateTimeFormat | keyof typeof DateTimeFormat;
}

// WORKS:
// export const DateTimeDefaults: DateTimeOptions = {
//     format: DateTimeFormat.ShortDateTime
// };

// DOESN'T WORK:
// the default DateTime options
export const DateTimeDefaults: DateTimeOptions = Object.freeze({
    format: DateTimeFormat.ShortDateTime
});

interface DateTimeProps extends DateTimeOptions {
    date?: moment.MomentInput;
}

/**
 * Displays a date-ish value as a formatted date/time
 */
export const DateTime: FC<DateTimeProps> = ({ date, ...options }) => {
    const actualOptions = Object.assign({}, DateTimeDefaults, options);
    const formatted = moment(date).format(actualOptions.format);
    
    return <div>{formatted}</div>;
}
