/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<b>bold</bold>"},"scriptrdata":[]}}*#*#*/
var content= '<b>bold</bold>'; var response = apsdb.httpRespond(); response.write(content);response.close();			