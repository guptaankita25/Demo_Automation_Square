
class dateUtils {
    getDay() {
        let date = new Date();
        return date.getDate();
    }

    getCurrentMonthInString() {
        let monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let date = new Date();
        let month = date.getMonth();
        return monthNames[month];

    }

    // getCurrentMonthInString() {
    //     let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    //     let date = new Date();
    //     let month = date.getMonth();
    //     return monthNames[month];

    // }
}

export default new dateUtils();
