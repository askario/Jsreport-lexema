function getNumber(Rows){
    return Rows[0].Номер_документа
}
function getAddTab(Rows){
    return Rows[0].Через_кого
}
function getGescription(Rows){
    return Rows[0].Примечание
}
function getOrg1(Rows){
    return Rows[0].Реквизит1
}
function getOrg2(Rows){
    return Rows[0].Реквизит2
}
function getOKPO(Rows){
    return Rows[0].OKPO
}
function parseQuantity(Row){
    return Row.toFixed(4)
}

function parsePrice(Row){
    return Row.toFixed(2)
}
function parseSumm(Row){
    return Row.toFixed(2)
}
function totalQuantity(Rows){
    let quantity = 0;
    Rows.forEach(row=> quantity+=row.Quantity)
    return (Math.round(quantity*10000)/10000).toFixed(4);
}
function totalSum(Rows){
    let sum = 0;
    Rows.forEach(row=> sum+=row.Sum)
    return (Math.round(sum*100)/100).toFixed(2);
}
function getRequire(Rows){
    return Rows[0].Затребовал;
}
function getAllowed(Rows){
    return Rows[0].Разрешил;
}
function getSenderSign(Rows){
    return Rows[0].Подписант_Отправ;
}
function getSenderPost(Rows){
    return Rows[0].Должность_Отправ;
}
function getReceiverSign(Rows){
    return Rows[0].Подписант_получат;
}
function getReceiverPost(Rows){
    return Rows[0].Должность_получат;
}