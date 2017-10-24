var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();

    this.videoList = new VideoListView({ 
      el: $('.list'), 
      collection: this.videos 
    });
    
    this.videoPlayer = new VideoPlayerView({
      model: this.videos.at(0), 
      el: $('.player'),
      collection: this.videos
    });
  
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html'),

  // select
  // when a title is slected
  // update the videoPlayer model / view to the selected
  /*
  select: function () {
    this.model.on('change', videoPlayer.model(this)); //do something, update the VPV ???)
  },
 */




});
