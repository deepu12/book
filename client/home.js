Template.home.helpers({
  books : function(){
    var book = Books.find();
    return book;
  },
  imgId : function(){
    var imgId = Images.findOne({_id:this.imageId});
    console.log("From Image Id helper",imgId);
    return imgId;
  },
  isAdmin : function(){
    var uname = Meteor.user().username;
    if (uname == "admin"){
      return "Not a authorised user";
    }
  }
});

Template.home.onCreated(function(){
  Meteor.subscribe("books");
  Meteor.subscribe("images");
})
