

    $("#checkboxes").buttonset();

    $('.codeDiv').height($(window).height() - $('topbar').height())

    $('#htmlButton').attr("checked","checked").button('refresh');
    $('#resultButton').attr("checked","checked").button('refresh');

    $("#htmlDiv").show();
    $("#resultDiv").show();


    var codeDivs = document.getElementsByClassName('codeDiv');

    function getCurrentVisible() {
      var currentVisible = 0;

      $(".codeDiv").each(function( index ){
        if ($(this).is(':visible')) {
          currentVisible++;
        }
      });
      return currentVisible;
    }

    function setWidth() {
      var width = 100/getCurrentVisible() + '%';
      $(".codeDiv").css("width", width);
    }

    $(".toggles").click(function () {
      var id = this.id;
      var div = id.replace('Button', 'Div')
      var selector = '#' + div;
      $(selector).toggle();
      setWidth();
    });

    $("#runButton").click(function() {
      $("iframe").contents().find("html").html('<style>'+$("#cssCode").val()+
        '</style>'+$("#htmlCode").val());

        document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val());
    });