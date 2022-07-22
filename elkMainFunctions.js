'use strict';
module.exports = class elkMainFunctions  {
    //   // first thing when calling this class is to check whether the index already exists or not
//   // if exists it will add the document
// inheritance beytkatab keda fe JS
constructor() {
// this.client=client;
  //this.current_date=new Date();
  //this.indexName= current_date.toISOString().slice(0,8);
 //var indexName="test";
  //   function indexExists(indexName){
    // console.log("class init")
        return client.indices.exists({
        index: "test"
      },function(err,resp){
        if(err){
        createindex(indexName);
    //    }
      }});
}
 addDocument(data){
  console.log("document added")
    // filter out null values| none
    //data= JSON.stringify(data);
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
	  client.index({
      index: "test",
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
   createindex(){
    return client.indices.create({
      index: "test"
    });
    };
};
//class elkMainFunctions();
