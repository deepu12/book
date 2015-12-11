Template.deleteBook.helpers({
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

Template.deleteBook.events({
   'click #btn-del' : function(event, template){
     //var bookId = fid;
      console.log("The book id in events : ",this._id);
      var btnRemove = Books.remove(this._id);
      if(btnRemove){
          toastr.success("Deleted Successfully");
         FlowRouter.go('/deleteBook');
      }
      else {
        toastr.error("Failed to delete");
      }
}});

Template.deleteBook.onCreated(function(){
  Meteor.subscribe("books");
  Meteor.subscribe("images");
});
