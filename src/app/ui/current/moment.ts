export default function Date(){
    const moment= require('moment');
    const currentDate=moment();
    const nextDayDate=moment(currentDate).add(1,'days');
    const formattedNextDay=nextDayDate.format('dddd');
    return formattedNextDay;
}
