var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.collection.on('select', function(video) {
      this.model = video; 
    }, this);
  },
  
  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
