Nevernote.Views.NotesList = Support.CompositeView.extend({
  initialize: function() {
    _.bindAll(this, "render");

    this.bindTo(Nevernote.notes, "add", this.render);
    this.bindTo(Nevernote.notes, "remove", this.render);
    this.bindTo(Nevernote.notes, "change", this.render);
    this.bindTo(Nevernote.notes, "reset", this.render);

    $(window).on('resize', function() {
      var windowHeight = $(window).height();
      $('#notes-list').height(windowHeight - 86);
      $('#notes-list').find('ul').height(windowHeight - 126);
    });
  },

  events: {
    "click .show" : "show",
    "click .current-tag > button" : "removeTag"
  },

  render: function() {
    this.$el.html(JST['notes/list']());

    setTimeout(function() {
      var windowHeight = $(window).height();
      $('#notes-list').height(windowHeight - 86);
      $('#notes-list').find('ul').height(windowHeight - 126);
    }, 0);

    return this;
  },

  show: function(event) {
    event.preventDefault();
    this.switchCurrentNote($(event.currentTarget).attr('data-id'));
  },

  removeTag: function() {
    var self = this;
    Nevernote.currentTag = null;

    if (Nevernote.currentNotebook === null) {
      Nevernote.notes.fetch({
        success: function() {
          self.switchCurrentNote(Nevernote.notes.at(0).get('id'));
        }
      });
    } else {
      Nevernote.notes.reset(Nevernote.currentNotebook.get('notes').models);
      self.switchCurrentNote(Nevernote.notes.at(0).get('id'));
    };
  },

});
