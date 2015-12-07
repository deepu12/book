Books =new Mongo.Collection("books");

Books.attachSchema(new SimpleSchema({
  name : {
    type: String,
    label : "Name",
    max : 60
  },
  description : {
    type : String,
    label : "Description",
    max : 300
  },
  author : {
    type : String,
    label : "Author",
    max : 50
  },
  category : {
     type : String,
     allowedValues: ['Educational', 'Fictional','Love','Crime'],
     autoform: {
        options: [
           {label: "Educational", value: "Educational`"},
           {label: "Fictional", value: "Fictional"},
           {label: "Love Stories", value: "Love"},
           {label: "Crime", value: "Crime"},
        ]}

  },
  createdAt : {
    type : Date,
    autoValue : function(){return new Date()}
  },
  imageId : {
    type : String,
    autoform : {
      type : "hidden",
      label : false
  }}
}));
