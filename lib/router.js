FlowRouter.route('/',{
  action : function(){
    BlazeLayout.render("appLayout", {content : "home"})
  }
});
FlowRouter.route('/insertBook',{
  action : function(){
    BlazeLayout.render("appLayout", {content : "insertBook"})
  }
});
FlowRouter.route('/book/:bookId',{
  action : function(params){
    BlazeLayout.render("appLayout",{content : "editBook" , params : params})
  }
});
FlowRouter.route('/deleteBook',{
  action : function(){
    BlazeLayout.render("appLayout", {content : "deleteBook"})
  }
});
FlowRouter.route('/updateBook',{
  action : function(){
    BlazeLayout.render("appLayout", {content : "eBooks"})
  }
});
FlowRouter.route('/viewBook',{
  action : function(){
    BlazeLayout.render("appLayout", { content : "viewBook"})
  }
});
FlowRouter.route('/view/:bookId',{
  action : function(params){
    BlazeLayout.render("appLayout", {content : "view", params : params})
  }
});
