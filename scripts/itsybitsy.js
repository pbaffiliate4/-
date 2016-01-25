/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<b>spider</b>"},"scriptrdata":[]}}*#*#*/
var content= '<b>see saw up and down</b>'; var response = apsdb.httpRespond(); response.write(content);response.close();			
