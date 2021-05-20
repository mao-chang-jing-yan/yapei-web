
export const dateFormat = (date_str)=>{
    const t = new Date(date_str)
    if(isNaN(t.getFullYear())){
        return "timeErr"
    }
    return t.getFullYear() + "-" +
        (parseInt(t.getMonth().toString())+1) + "-" +
        t.getDate() + " " +
        t.getHours() + ":" +
        t.getMinutes() + ":" +
        t.getSeconds()



}
