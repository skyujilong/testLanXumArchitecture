/**
 * Created by lsc on 2014/11/24.
 */
define(['domReady!','template','jquery'],function(dom,template,$){
    var student = {
        name:'王芳',
        num:'112234',
        sex:'女'
    };
    var teacherNames = ['黄南','桂艺铭','杨熹','张梓怡','王静'];
    $("#student-info").html(template('student/stu-num-tpl',student));
    $('#teacher-name-list').html(template('teacher/teacher-name-tpl',teacherNames));
});