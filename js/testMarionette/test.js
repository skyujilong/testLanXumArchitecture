/**
 * Created by lsc on 2014/11/27.
 */
var userModel = Backbone.Model.extend({
    default: {
        name: '',
        sex: '男',
        age: 20
    },
    constructor: function () {
        if (arguments.length > 0) {
            Backbone.Model.apply(this, arguments);
        }
    },
    localStorage: new Backbone.LocalStorage('user-backbone')
});
var userModelCollection = Backbone.Collection.extend({
    model: userModel,
    localStorage: new Backbone.LocalStorage('user-backbone'),
    getMen: function () {
        return this.where({sex: '男'});
    },
    getWomen: function () {
        return this.where({sex: '女'});
    }
});

//初始化list内容
var colllection = new userModelCollection();


var router = Marionette.AppRouter.extend({
    controller: {
        saveOrUpdate: function (param) {

        }
    },
    appRoutes: {
        'saveOrUpdate/:id': 'saveOrUpdate'
    }
});

//var viewList = Marionette.

//view定义
var editView = Marionette.ItemView.extend({
    initialize:function(model){
        this.model = model;
        console.log('new....................');
    },
    collection: colllection,
    template: function (data) {
        console.log("内容：%o",data);
        return template('editTpl', data);
    },
    ui: {
        editBtn: '#save-btn'
    },
    events: {
        'click #save-btn': 'save'
    },
    save: function (event) {
        var $edit = this.ui.editBtn.closest('.edit');
        if(this.model){
            this.model.set({
                name: $edit.find('input[name="name"]').val(),
                age: $edit.find('input[name="age"]').val(),
                sex: $edit.find('input[name="sex"]').val()
            });
        }else{
            colllection.add(new userModel({
                name: $edit.find('input[name="name"]').val(),
                age: $edit.find('input[name="age"]').val(),
                sex: $edit.find('input[name="sex"]').val()
            }));
        }
        console.log(this.model);

    }
});
var userItemView = Marionette.ItemView.extend({
    collection: colllection,
    template: function (data) {
        console.log(data);
        return template('userTpl', data);
    },
    events:{
        'click .edit-btn' : 'editModule',
        'click .save-btn' : 'removeModule'
    },
    editModule:function(){
//        console.log(this.model);
         app.edit.show(new editView(this.model));
    },
    removeModule:function(){
//        console.log(this.model);
        this.model.destroy();
    },
    initialize:function(opts){
        console.log(arguments);
        console.log(opts);
        currentIndex = opts.index;
        this.listenTo(this.model,'change',this.render,this);
    }
});

var listView = Marionette.CollectionView.extend({
    collection: colllection,
    itemView: userItemView,
    itemViewOptions: function (module,index) {
        module.set('index',index);
    },
    initialize:function(){
        this.listenTo(this.collection,'remove',this.render,this);
    }
});

//app
var app = new Marionette.Application();
//三个显示区域
app.addRegions({
    edit: '.edit',
    userList: '.list',
    footer: '.total'
});

//添加app初始化
app.addInitializer(function () {
    app.edit.show(new editView());
    app.userList.show(new listView());
});
app.start();