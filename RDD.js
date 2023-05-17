const moment = require('moment');

function myFunction(lastMedication,frequency,stock,dose,deliveryDays){
    var nextMedication = moment(lastMedication, ["DD/MM/YYYY"]).add(frequency,'days').format("DD/MM/YYYY");
    console.log('Next Medication -> ' + nextMedication);

    const daysLeft = frequency*stock/dose
    console.log('Days Left -> ' + daysLeft);

    const Rdd = moment(nextMedication, ["DD/MM/YYYY"]).add(daysLeft,'days').format("DD/MM/YYYY");
    console.log('RDD -> ' + Rdd);
    
    const today = moment().format(["DD/MM/YYYY"]);
    console.log('Current Date -> ' + today);

    const lastMed = moment(lastMedication, ["DD/MM/YYYY"]).format("DD/MM/YYYY");
    console.log('Last Medication -> ' + lastMed);

    const dayDiff = moment(Rdd, ["DD/MM/YYYY"]).diff(moment().subtract(1, 'days'), 'days');
    console.log('Days Diff -> '+(dayDiff));
    
    if(dayDiff===14){
        const initial = moment().add(2, 'days');
        console.log(initial.format("DD/MM/YYYY"));
        const dates = [];
        const NUM_OF_DAYS = 12;
        for(let i=0;i<NUM_OF_DAYS;i++){
            const date = moment(Rdd,["DD/MM/YYYY"]).subtract(1, 'day');
            date.subtract(i, 'day').format("DD/MM/YYYY");
            dates.push({
                date:date.format("ddd, Do MMMM YYYY"),
                dateFormat:date.format("dddd")
            });
        }
        console.log(dates);
        const commonDays = dates.filter(val=>{
            return deliveryDays.includes(val.dateFormat);
        })
        console.log(commonDays.map(d => d.date));
    }else if(dayDiff>14){
        const dates = [];
        const NUM_OF_DAYS = 14;
        for(let i=0;i<NUM_OF_DAYS;i++){
            const date = moment(Rdd,["DD/MM/YYYY"]).subtract(1, 'day');
            date.subtract(i, 'day').format("DD/MM/YYYY");
            dates.push({
                date:date.format("ddd, Do MMMM YYYY"),
                dateFormat:date.format("dddd")
            });
        }
        console.log(dates);
        const commomnDays = dates.filter(val=>{
            return deliveryDays.includes(val.dateFormat);
        })
        console.log(commomnDays.map(d => d.date));
    }
    else{
        const dates = [];
        for(let i=0;i<daysLeft;i++){
            const date = moment(Rdd,["DD/MM/YYYY"]).subtract(1, 'day');
            date.subtract(i, 'day').format("DD/MM/YYYY");
            dates.push({
                date:date.format("ddd, Do MMMM YYYY"),
                dateFormat:date.format("dddd")
            });
        }
        console.log(dates);
        const commomnDays = dates.filter(val=>{
            return deliveryDays.includes(val.dateFormat);
        })
        console.log(commomnDays.map(d => d.date));
}
}
myFunction(('20/02/2023'),7,2,2,["Monday","Friday"]);