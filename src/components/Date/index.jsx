import React, { useState, useEffect, useContext } from "react";
import { DateValue, DateInput } from "mantine-datepicker-jalali";
import "dayjs/locale/fa"

// function Date() {
//     const [singleValue, setSingleValue] = useState<DateValue>(null);
//     return(
//         <div>
//             <DateInput        
//                 label="تاریخ"
//                 placeholder="تاریخ را وارد کنید"
//                 style={{ direction: "rtl" }} // RTL lable
//                 defaultValue={new Date()} // Initial date that is displayed, used for uncontrolled component
//                 value={singleValue}
//                 onChange={setSingleValue}
//                 locale="fa" // Required to use Jalali Calendar
//                 firstDayOfWeek={6} // number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday
//                 weekendDays={[5]} // Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday, defaults to value defined in DatesProvider
//             />
//         </div>
//     );
// }

// export default Date;