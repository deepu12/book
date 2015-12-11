Template.catList.helpers({
	catlist : function(){
		return _.uniq(Books.find({}, {category: 1}).fetch().map(function(x){ return x.category}));
	}
});

Template.catList.onCreated(function(){
  Meteor.subscribe("books");
  Meteor.subscribe("images");
});
