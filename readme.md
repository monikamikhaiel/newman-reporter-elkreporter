Inspired by https://github.com/tomaszsluszniak/newman-reporter-sql

this script insert the data in ELK CLuster currently the cluster IPS are hardcoded 
the index template should be ready as the following curl
## How to use ? 
    newman run CSBS.postman_collection.json  -e Auto-Prod-Paris.postman_environment.json -r elkreporter --reporter-protocol http  --reporter-clusterendpoint http://172.16.0.103:9200,http://172.16.0.227:9200,http://172.16.0.37:9200 --reporter-indexname monika-` date +"%Y-%m-%d"`  --reporter-jobid "$CI_JOB_ID" --reporter-pipelineid "$CI_PIPELINE_ID"
## How to create the base template ?
        PUT _template/fix_date_
        {"index_patterns": ["fei-*"],"settings": {
        "number_of_shards": 3},"mappings": {"_source": {"enabled": true},
        "properties": {
        "timesatmp": {"type": "date","format": "year_month_day" },  "date_of_response": {"type": "date","format": "epoch_millis"},"collection_name": {"type" : "text","fields" : {"keyword" : {"type" : "keyword","ignore_above" : 256}}},
        "service_name": {"type" : "text","fields" : {"keyword" : {"type" : "keyword","ignore_above" : 256}}}, 
        "region": {"type" : "text","fields" : {"keyword" : {"type" : "keyword","ignore_above" : 256}}},
        "newman_time": {"type" : "text","fields" : {"keyword" : {"type" : "keyword","ignore_above" : 256}}},
        "request_name": {"type" : "text","fields" : {"keyword" : {"type" : "keyword","ignore_above" : 256}}} ,
        "url":  {"type" : "text","fields" : {
        "keyword" : {"type" : "keyword","ignore_above" : 256}}} ,
        "method":  {"type" : "text","fields" : {
        "keyword" : {"type" : "keyword","ignore_above" : 256}}
        },"status": {"type" : "text","fields" : {"keyword" : {"type" : "keyword","ignore_above" : 256 } }} ,
        "code":  { "type" : "long","fields" : {"keyword" : {"type" : "keyword","ignore_above" : 256}}},
        "response_time": {"type" : "long","fields" : {
        "keyword" : {"type" : "keyword","ignore_above" : 256}}},
        "response_size":{"type" : "long","fields" : {
        "keyword" : {"type" : "keyword","ignore_above" : 256}}} ,
        "response": {"type" : "text"},
        "test_status": {"type" : "text", "fields" : {"keyword" : {"type" : "keyword","ignore_above" : 256}}},
        "assertions": {"type" : "long"},
        "failed_count":{"type" : "long" } ,
        "skipped_count":{"type" : "long"} ,
        "failed": {"type" : "text","fields" : {"keyword" : {"type" : "keyword","ignore_above" : 256}}} ,
        "skipped": {"type" : "text","fields" : {"keyword" : {"type" : "keyword","ignore_above" : 256}}} ,
        "iteration":{"type" : "long"} ,
        "newman_thread": {"type" : "text","fields" : {"keyword" : {"type" : "keyword",
        "ignore_above" : 256 }}},
        "job_id":  {"type" : "text","fields" : {"keyword" : {"type" : "keyword","ignore_above" : 256}}},
        "pipeline_id" : {"type" : "text", "fields" : {"keyword" : {"type" :"keyword","ignore_above" : 256}}}}}
        }

        https://stackoverflow.com/questions/48869795/difference-between-a-field-and-the-field-keyword