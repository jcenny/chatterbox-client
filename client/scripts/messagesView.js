var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  filterFriends: (data, list) => {

    data.forEach(function(element) {
      if (element.username === list[element.username]) {
        element.friend = true;
      } else {
        element.friend = false;
      }
    });
    MessagesView.render(data);

  },

  filterMessages: (data, roomname) => {
    var arr = [];
    data.forEach(function(element) {
      if (element.roomname === roomname) {
        arr.push(element);
      }
    });

    MessagesView.render(arr);
  },

  render: function(data) {
    if (data.length === 1) {
      var username = data[0].username;
      var text = data[0].text;
      var msg = MessageView.render({'username': username, 'text': text});
      var $msg = $(msg);
      var usernameTag = $msg.find('.username');
      if (data[0].friend) {
        $msg.addClass('friend');
      } else {
        $msg.removeClass('friend');
      }
      usernameTag.click(function (event) {
        Friends.toggleFriends(event);
      });

      // MessagesView.$chats.find('.username').click(function() {
      //   Friends.toggleStatus();
      // });

      MessagesView.$chats.prepend(msg);


// single message
// ======================================================================
// full pull of data
    } else {
      console.log(data)
      MessagesView.$chats.empty();
      data.forEach(function(element) {
        var username = element.username;
        var text = element.text;
        element.friend;
        var msg = MessageView.render({'username': username, 'text': text});
        var $msg = $(msg);
        var usernameTag = $msg.find('.username');


        if (element.friend) {
          $msg.addClass('friend');
        } else {
          $msg.removeClass('friend');
        }

        usernameTag.on('click', function (event) {
          Friends.toggleFriends(event);
        });

        MessagesView.$chats.append($msg);
      });

    }

  }

};