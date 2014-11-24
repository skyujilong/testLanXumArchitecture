/*TMODJS:{"version":4,"md5":"554a593898ba417801f084d8b0bba807"}*/
template('teacher/teacher-name-tpl',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$each($data,function($value,$index){
$out+=' <li>';
$out+=$escape($index);
$out+='-';
$out+=$escape($value);
$out+='</li> ';
});
return new String($out);
});