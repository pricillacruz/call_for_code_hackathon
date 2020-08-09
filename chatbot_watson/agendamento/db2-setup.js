var ibmdb = require('ibm_db');
/**
  * Set up the necessary Db2 table, insert some data or clean up
  *
  * Written by Henrik Loeser
  */

function db2Setup(dsn, mode) {
 try {
    var tabledef="create table agendamentos "+
                 "(idagendamento int not null generated always as identity (start with 1000, increment by 1),"+
                  "nomeunidade varchar(50) not null,"+
                  "dataagendamento date not null,"+
                  "horario time not null);";
    var sampledata="insert into agendamentos(nomeunidade,dataagendamento,horario) values('Hospital Teste','2019-02-15','12:00:00');"
    var tabledrop="drop table agendamentos;"
    var conn=ibmdb.openSync(dsn);
    if (mode=="setup")
    {
        var data=conn.querySync(tabledef);
    } else if (mode=="sampledata")
    {
      var data=conn.querySync(sampledata);
    } else if (mode=="cleanup")
    {
      var data=conn.querySync(tabledrop);
    }
    conn.closeSync();
    return {result : data};
 } catch (e) {
     return { dberror : e }
 }
}

function main(params) {
  dsn=params.__bx_creds[Object.keys(params.__bx_creds)[0]].dsn;
	return db2Setup(dsn, params.mode);
}