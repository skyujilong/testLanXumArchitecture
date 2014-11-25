require(['domReady!','jquery','template','text!./../../tpl/student/stu-num-tpl.html'],function(dom,$,template,studentTpl){
    var student = {
        name:'王芳',
        num:'112234',
        sex:'女'
    };
    console.log(studentTpl);
    $("#student-info").html(template.compile(studentTpl)(student));
});