Template.editBook.helpers({
  eBook : function(params){
    console.log("This is my book id : "+this.bookId);
    return Books.findOne(this.bookId);
  }
});
Template.editBook.events({
   'click #btn-del' : function(event){
      console.log("The book id in events : ",this.bookId);
      var btnRemove = Books.remove(this.bookId);
      if(btnRemove){
          toastr.success("Deleted Successfully");
         FlowRouter.go('/');
      }
      else {
        toastr.error("Failed to delete");
      }
}});
