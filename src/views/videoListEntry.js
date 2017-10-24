var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },


  // on click handle the click
  // events: {
  //   this.on('click', handleClick(), this);
  // },
  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  // handle click
  //     select this.model.select()  ?? how do we select the model .. app.js select fn?

  // handleClick: function () {
  //   this.model.select();
  // },
  handleClick: function() {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html'),




  

});
