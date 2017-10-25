var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    
    // render videoList instance
    this.videoList = new VideoListView({ 
      el: '.list', 
      collection: this.videos 
    });
    
    // render videoPlayer instance 
    this.videoPlayer = new VideoPlayerView({
      model: this.videos.at(0), 
      el: '.player',
      collection: this.videos
    });
  
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html'),





});
