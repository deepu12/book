AutoForm.hooks({
   insertBooks : {
      onError : function(insert, error){
         console.log("on Error Function"+error);
         toastr.warning(error);
         toastr.error("Failed to insert book");
      },
      onSuccess : function(insert, error){
         toastr.success("inserted successfully");
         FlowRouter.go('/');
      }
   },
   updateBook : {
      onError : function(insert, error){
         console.log("on Error Function"+error);
         toastr.warning(error);
         toastr.error("Failed to save changes");
      },
      onSuccess : function(insert, error){
         toastr.success("Updated successfully");
         FlowRouter.go('/');
      }
   }
});
