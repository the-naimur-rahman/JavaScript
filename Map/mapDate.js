function formatedDate(element){
    let parts = element.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

let dates = ["2024-01-10", "2024-02-20", "2024-03-30"];

let formatedDates = dates.map(formatedDate);

console.log(formatedDates);