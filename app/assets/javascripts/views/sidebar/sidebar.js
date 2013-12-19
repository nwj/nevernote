Nevernote.Views.Sidebar = Support.CompositeView.extend({

  events: {
    "click .dropdown-button": "toggleDropdown",
    "click .dropdown-menu": "hideDropdown"
  },

  render: function() {
    this.renderLayout();
    this.renderNotebooks();
    this.renderTags();

    return this;
  },

  renderLayout: function() {
    this.$el.html(JST['sidebar/layout']());
  },

  renderNotebooks: function() {
    var view = new Nevernote.Views.NotebooksList();
    var container = this.$('#notebooks-list');
    this.renderChildInto(view, container);
  },

  renderTags: function() {
    var view = new Nevernote.Views.TagsList();
    var container = this.$('#tags-list');
    this.renderChildInto(view, container);
  },

  toggleDropdown: function(event) {
    var menu = $(event.currentTarget).parent().find('.dropdown-menu');
    menu.toggleClass('hide').toggleClass('on');

    var other_menus = $('#sidebar').find('.dropdown-menu').not('.on')
    other_menus.addClass('hide')

    menu.removeClass('on')
  },

  hideDropdown: function(event) {
    $('#sidebar').find('.dropdown-menu').addClass('hide')
  }

});
