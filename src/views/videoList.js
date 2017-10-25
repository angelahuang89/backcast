var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.collection.forEach((entry, i) => {
      var video = new VideoListEntryView({
        // el: '.video-list-entry', 
        model: entry
      });
      this.$el.append(video.el.innerHTML);
    });
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
