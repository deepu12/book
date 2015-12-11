Books.allow({
   'insert' : function(userId, doc){
      return userId;
   },
   'update' : function(userId, doc, fields, modifier){
      return userId == doc.userId;
   },
   'remove' : function(userId, doc){
      return false;
   }
});

Images.allow({
    insert: function(userId, doc){
      return userId;
    },
    update: function(userId, doc){
      return userId;
    },
    remove: function(userId, doc){
      return false;
   },
   download: function(userId, doc){
      return true;
   }
  });
