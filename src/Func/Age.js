export default function Age(date){
    let Birthday = new Date(date);
    let month_diff = Date.now() - Birthday.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    return age;
}