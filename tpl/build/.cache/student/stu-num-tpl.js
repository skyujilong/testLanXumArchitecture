/*TMODJS:{"version":1,"md5":"c255753410864687e7da37410291b453"}*/
template('student/stu-num-tpl',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,name=$data.name,num=$data.num,sex=$data.sex,$out='';$out+='<h1>';
$out+=$escape(name);
$out+='</h1> <span>学号：';
$out+=$escape(num);
$out+='</span> <span>性别：';
$out+=$escape(sex);
$out+='</span>';
return new String($out);
});