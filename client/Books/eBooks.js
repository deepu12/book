Template.eBooks.helpers({
  books : function(){
    var book = Books.find();
    return book;
  },
  imgId : function(){
    var imgId = Images.findOne({_id:this.imageId});
    console.log("From Image Id helper",imgId);
    return imgId;
  }
});
Template.eBooks.onCreated(function(){
  Meteor.subscribe("books");
  Meteor.subscribe("images");
})
