var VideoListView = Backbone.View.extend({

  initialize: function() {
    // your code here
    // this.videos = new Videos(window.exampleVideoData);
    this.render();
    // this.collection.on('change', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
