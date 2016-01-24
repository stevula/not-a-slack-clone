Comments = new Mongo.Collection('comments');

if (Meteor.isClient) {
  Template.commentList.helpers({
    comments: function() {
      return Comments.find();
    },
    formatTimestamp: function(datetime) {
      return moment(datetime).calendar();
    }
  });

  Template.commentAdd.events({
    'submit form': function(e, template) {
      e.preventDefault();

      var form = template.find('form'),
          commentField = template.find('[name=comment]'),
          commentText = commentField.value;

      Comments.insert({
        login: 'stevula',
        timestamp: new Date(),
        room: 'main',
        comment: commentText
      });

      form.reset();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  // code to run on server at startup
  });
}