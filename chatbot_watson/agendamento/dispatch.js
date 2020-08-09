var ibmdb = require('ibm_db');


// PROCURAR AGENDAMENTO PELO NOME
 function fetchEventByShortname(dsn, eventname) {
    try {
       var conn=ibmdb.openSync(dsn);
       // Search for exact match only, could be extended with lIKE
       var data=conn.querySync("select nomeunidade, dataagendamento, horario from agendamentos where nomeunidade=? fetch first 10 rows only", [eventname]);
       conn.closeSync();
       var resString="Agendamento: \n";
       for (var i=0;i<data.length;i++) {
         resString+="Unidade de atendimento: "+data[i]['NOMEUNIDADE']+"\nData: "+data[i]['DATAAGENDAMENTO']+"\nHorário: "+data[i]['HORARIO']+"\n";
       }
       // Return both generated string and data
       return {result : resString, data : data, input: eventname};
    } catch (e) {
        return { dberror : e }
    }
   }
   

// PROCURAR AGENDAMENTO PELA DATA
 function fetchEventByDates(dsn, eventdates) {
    try {
       var conn=ibmdb.openSync(dsn);
       // Base data is timestamp
       var data=conn.querySync("select nomeunidade, dataagendamento, horario from agendamentos where dataagendamento=?", eventdates.split(","));
       conn.closeSync();
       var resString="Agendamento: \n";
       for (var i=0;i<data.length;i++) {
         resString+="Unidade de atendimento: "+data[i]['NOMEUNIDADE']+"\nData: "+data[i]['DATAAGENDAMENTO']+"\nHorário: "+data[i]['HORARIO']+"\n"
       }
       // Return both generated string and data
       return {result: resString, data: data, input: eventdates};
    } catch (e) {
        return { dberror : e }
    }
   }

// REALIZAR NOVO AGENDAMENTO
 function insertEvent(dsn, eventValues) {
    try {
       var conn=ibmdb.openSync(dsn);
       // The timestamp value is derived from date and time values passed in
       var data=conn.querySync("insert into agendamentos(nomeunidade, dataagendamento, horario) values(?,?,?)", eventValues);
       conn.closeSync();
       return {result: data, input: eventValues};
    } catch (e) {
        return { dberror : e }
    }
   }
   

function main(params) {
    dsn=params.__bx_creds[Object.keys(params.__bx_creds)[0]].dsn;

    switch(params.actionname) {
        case "insert":
            return insertEvent(dsn,params.eventValues.split(","));
        case "searchByDates":
            return fetchEventByDates(dsn,params.eventdates);
        case "searchByName":
            return fetchEventByShortname(dsn,params.eventname);
        default:
            return { dberror: "No action defined", actionname: params.actionname}
    }
}
