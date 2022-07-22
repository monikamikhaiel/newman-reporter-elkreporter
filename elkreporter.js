
// https://dzone.com/articles/working-with-documents-using-elastic-search-and-no
global.signin = () => {}
const { Client } = require('@elastic/elasticsearch')
// const commandLineArgs = require('command-line-args');
//const optionDefinitions = [
   // { name: 'cluster_ip', alias: 'c',type: String,multiple: true },
 // {name: 'cluster_port', alias: 'i', type: String },
 // { name: 'test_name', alias: 't', type: String },
 // { name: 'protocol', alias: 'p', type: String }
//]
//'use strict';
//var elkMainFunctions = require('./elkMainFunctions');
//import elkMainFunctions from 'elkMainFunctions.js';
const client = new Client({
  nodes :["http://172.16.0.103:9200","http://172.16.0.227:9200","http://172.16.0.37:9200"],
  maxRetries: 5,
  requestTimeout: 60000,
  sniffOnStart: true,
  apiVersion:'7.9'
});
  // const { Sequelize, Model, DataTypes } = require('sequelize');
  // client.bulk(...) //Allows to perform multiple index/update/delete operations in a single request.
  // client.create(...) //Creates a new document in the index.
  // client.index(...) //Creates or updates a document in an index.
  // class for indices and docs
  //   class elk_main_functions  {
//     //   // first thing when calling this class is to check whether the index already exists or not
// //   // if exists it will add the document
// // inheritance beytkatab keda fe JS
// constructor() {
// // this.client=client;
//   //this.current_date=new Date();
//   //this.indexName= current_date.toISOString().slice(0,8);
//  //var indexName="test";
//   //   function indexExists(indexName){
//     // console.log("class init")
//         return client.indices.exists({
//         index: "test"
//       },function(err,resp){
//         if(err){
//         createindex(indexName);
//     //    }
//       }});
// }
// static add_document(data){
//     // filter out null values| none
//     //data= JSON.stringify(data);
//      //   data= JSON.stringify(data);
//         //        let data_filtered = Object.fromEntries(Object.entries(data).filter(([_, v]) => v != null));
//         //    var data_filtered= Object.keys(data).forEach((k) => data[k] == null && delete data[k]);
//         //  let data_filtered=data.filter(item => item!=='');
//            //console.log(typeof(data),"entries:",Object.keys(data).forEach((k) =>data.k == null));
//           //var data_filtered = data.reduce(function (obj, key){
//           //    obj[key] ;
//             //  return obj;
//           //}, {});
//           var data=Object.entries(data).filter(([_, v]) => v != null);
//          var data_filtered=(data).reduce((obj, [key, val]) => {
//             obj[key] = val
//             return obj
//           }, {});
//           data_filtered= JSON.stringify(data_filtered);
//        client.index({
//       index: "test",
//       body : data_filtered
//     },function(err,resp){
//       if(err){
//         console.log(err);
//       }
//       else {
//         console.log("doc is added ",resp);
//       }
//     });
//   };
//    static createindex(){
//     return client.indices.create({
//       index: "test"
//     });
//     };
// };
//var elk_function=new elk_functions();
//var elk_main_functions= new elk_main_functions ();
  class elkreporter {

    constructor(newmanEmitter, reporterOptions, options) {
      this.newmanEmitter = newmanEmitter;
      this.reporterOptions = reporterOptions;
      this.options = options;
      this.context = {
        id: `${new Date().getTime()}-${Math.random()}`,
        currentItem: { index: 0 },
        assertions: {
          total: 0,
          failed: [],
          skipped: []
        },
        list: [],
        debug: this.reporterOptions.sqlDebug || this.reporterOptions.debug || false
      };
      const events = 'start beforeItem item request script assertion exception done'.split(' ');
      events.forEach((e) => { if (typeof this[e] == 'function') newmanEmitter.on(e, (err, args) => this[e](err, args)) });

      if (this.context.debug) {
        console.log('[+] Reporter Options', reporterOptions);
      }

      this.context.protocol = this.reporterOptions.protocol;
      this.context.jobid = this.reporterOptions.jobid;
     this.context.pipelineid = this.reporterOptions.pipelineid;
      this.context.port = this.reporterOptions.port;
     this.context.clusterIPs = this.reporterOptions.clusterIPs.split(",");

//console.log(this.context.protocol,this.context.clusterIPs,typeof(this.context.clusterIPs))
 //   var protocol=this.context.protocol
  //  var port=this.context.port
    // var nodes =this.context.clusterIPs.reduce(function (accumulator, ip) {
    //               accumulator.push(protocol+"://"+ip+":"+port)
    //           return accumulator
    //                    }, []);
//          console.log(this.context.protocol,nodes)
//client = CLIENT({
 //nodes : nodes ,
   // maxRetries: 5,
    //requestTimeout: 60000,
   // sniffOnStart: true,
    // apiVersion:'7.9'   });

//console.log("hello",client,typeof(client))

    }
    async start(error, args) {
      console.log(`[+] Starting collection: ${this.options.collection.name} ${this.context.id}`);

      try {

        //await this.result_table.sync();
        // check cluster health
        client.cluster.health({},function(err,response,status){
          console.log(response);
         // console.log("status code is ",status);

        });

      } catch (err) {
        //console.log('[-] ERROR:', this.context.debug ? error : error.message);
        console.log(err);

      }
    }

    beforeItem(error, args) {
      // ask about it ??????
      // this.context.list.push(this.context.currentItem);

      // this.context.currentItem = {
      //   index: (this.context.currentItem.index + 1),
      //   name: '',
      //   data: {}
      // };
    }

    request(error, args) {
      const { cursor, item, request } = args;
      var date      = new Date();
      var timestamp = date.getTime();
      console.log(`[${this.context.currentItem.index}] Running ${item.name}`);
    //   var collec_name;
    //   if (args.request.headers){
    //     collec_name=JSON.parse(data.request.headers)[0]['key']=="From"? JSON.parse(data.request.headers)[0]['value']: this.options.collection.name;
    //     //console.log(collec_name)
    //     collec_name=JSON.stringify(collec_name);
    //  }
    //  else {
    //   collec_name=this.options.collection.name
    //  }
    var collec_name;
    //console.log(data.request.headers.reference)
    if (args.request.headers.reference['from'] ){
     // collec_name=(JSON.parse(data.request.headers)[0])
      //? JSON.parse(data.request.headers)[0]['value']: null;
     collec_name=args.request.headers.reference['from'].toString().replace('PostmanHeader','');
      //console.log(collec_name.split(':')[1]);
      //console.log(typeof(collec_name));
      collec_name=this.options.collection.name+(collec_name.split(':')[1]).toString();

   }
   else{
    collec_name=this.options.collection.name;

   }
   const data = {
    collection_name: collec_name,
    service_name: request.url.host[0].toString(),
    region:request.url.host.length ==5 ? request.url.host[1].toString(): "global",
    date_of_response:args.response ? Date.parse((args.response.headers.toString().replace('PostmanHeader','').split('GMT')[0]).split("e:")[1]).toString(): null ,
    newman_time: this.options.total,
    request_name: item.name,
    url: request.url.toString(),
    method: request.method,
     status: args.response ? args.response.status : null,
    code: args.response ? args.response.code : null,
    response_time: args.response ? args.response.responseTime : null,
    response_size: args.response ? args.response.responseSize : null,
    response: args.response ? args.response.stream.toString('utf-8') : null,
    test_status: 'PASS',
    assertions: 0,
    failed_count: 0,
    skipped_count: 0,
    failed: '',
    skipped: '',
    iteration: cursor.iteration + 1,
    newman_thread: this.options.globals.id,
    job_id: this.context.jobid,
    pipeline_id :this.context.pipelineid,
    date_test_script:timestamp,
    timestamp:date
      };

      this.context.currentItem.data = data;
      this.context.currentItem.name = item.name;
    }
 script(error, args){
   // the test is more accurate in the request
 }
          exception(error, args) {
      // TODO:
    }

    assertion(error, args) {
      this.context.currentItem.data.assertions++;

      if(error) {
        this.context.currentItem.data.test_status = 'FAIL';

        let failMessage = `${error.test} | ${error.name}`;
        if (this.context.debug) {
          failMessage += `: ${error.message}`;
        }
        this.context.currentItem.data.failed += failMessage;
        this.context.currentItem.data.failed_count++;
        if (this.context.debug) {
          this.context.assertions.failed.push(failMessage);
        }
      } else if(args.skipped) {
        if(this.context.currentItem.data.test_status !== 'FAIL') {
          this.context.currentItem.data.test_status = 'SKIP';
        }

        const skipMessage = args.assertion;
        this.context.currentItem.data.skipped += args.assertion;
        this.context.currentItem.data.skipped_count++;
        if (this.context.debug) {
          this.context.assertions.skipped.push(skipMessage);
        }
      }
    }

    async item(error, args) {
      var data = this.context.currentItem.data;
      var current_date=new Date();
      this.indexName= current_date.toISOString().slice(0,8);
     function  add_document(data,indexName){
         //   data= JSON.stringify(data);
       //        let data_filtered = Object.fromEntries(Object.entries(data).filter(([_, v]) => v != null));
       //    var data_filtered= Object.keys(data).forEach((k) => data[k] == null && delete data[k]);
       //  let data_filtered=data.filter(item => item!=='');
             //console.log(typeof(data),"entries:",Object.keys(data).forEach((k) =>data.k == null));
         //var data_filtered = data.reduce(function (obj, key){
         //    obj[key] ;
           //  return obj;
         //}, {});
         var data=Object.entries(data).filter(([_, v]) => v != null);
        var data_filtered=(data).reduce((obj, [key, val]) => {
           obj[key] = val
           return obj
         }, {});
         data_filtered= JSON.stringify(data_filtered);
         //console.log("filter :",data_filtered,"original",data);
         //    console.log(Object.keys(data),data_filtered);
                 client.index({
                 index: indexName,
                 body : data_filtered
               },function(err,resp){
                 if(err){
                   console.log(err);
                 }
                 else {
                   console.log("doc is added ",resp);
                 }
               });
   };
   function  createindex(indexName){
     return client.indices.create({
       index: indexName
       ,
       "mappings" : {
        "properties": {
        "timestamp": {
            "type": "date",
         "format": "YYYY-MM-DD"
}}}
     });
     };

           // var indexName=new Date();
           //var indexName="test"
        var date=new Date();
var indexName= date.toISOString().slice(0,8);

 function indexExists(indexName){
       return client.indices.exists({
         index: indexName
       },function(err,resp){
         if(err){
          createindex(indexName);
                 add_document(data,indexName);
         }
         else {
          add_document(data,indexName);
         }
       });
     }
     indexExists(indexName);
// try{
//   var tet= new elkMainFunctions();
// console.log("class try :",typeof(tet.addDocument(data)));}
// catch{console.log("class catch:",typeof(tet));
// //elkMainFunctions.addDocument(data);
// //console.log("documen catch:",elkMainFunctions.addDocument(data));
// }
//elkMainFunctions.add_document(data);
   
    }


    done() {
      console.log(`[+] Finished collection: ${this.options.collection.name} (${this.context.id})`);
    }
  };
  module.exports = elkreporter;

