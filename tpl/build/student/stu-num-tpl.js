/*TMODJS:{"version":4,"md5":"5d4bb361a666959b9a4c48a4f9797f4e"}*/
define(["../template",""],function(a){return a("student/stu-num-tpl",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.name,e=a.num,f=a.sex,g="";return g+="<h1>",g+=c(d),g+="</h1> <span>\u5b66\u53f7\uff1a",g+=c(e),g+="</span> <span>\u6027\u522b\uff1a",g+=c(f),g+="</span>",new String(g)})});