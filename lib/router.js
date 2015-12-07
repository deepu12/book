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
})
