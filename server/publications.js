Meteor.publish('books', function(){
  return Books.find();
});
Meteor.publish('images', function(){
  return Images.find();
});
