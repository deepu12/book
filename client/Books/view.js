Template.view.helpers({
  vBook : function(params){
    console.log("This is my book id : "+this.bookId);
    return Books.findOne(this.bookId);
  }
});

Template.view.onCreated(function(){
  Meteor.subscribe("books");
  Meteor.subscribe("images");
});
