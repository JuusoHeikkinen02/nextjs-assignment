export default function CurrentDate(){
    const moment=require('moment');
    const currentDate=moment();
    const formattedCurrentDate=currentDate.format('dddd');
    return formattedCurrentDate;
}