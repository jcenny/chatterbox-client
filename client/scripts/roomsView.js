var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.on('change', RoomsView.handleSelect);
  },

  handleSelect: function(event) {
    event.preventDefault();

    Parse.readAll((data) => {
      var value = RoomsView.$select[0].value;
      MessagesView.filterMessages(data.results, value);
    });
  },

  render: function(data) {
    var obj = {};
    data.forEach(function(element) {
      var roomname = element.roomname;
      obj[roomname] = roomname;
    });
    for (let key in obj) {
      var template = (`<option>${key}</option>`);
      RoomsView.$select.append(template);
    }
  }

};
