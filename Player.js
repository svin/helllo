$.ajax({
        url:"http://morad.rocks/player/api/albums",
//        method: "GET",

        success: function(album) {
//            $("playlist").removeClass("loading");

            var albums = JSON.parse(album);
            console.log(albums);
            $.each((albums), function(key, albums){
                var div = "";
                div += "<div class='album' data-id='"+ albums.album_id +"' style='background-image: url("+ albums.album_image +")'>" +
                    "<h3>" + albums.album_name + "</h3>" +
                    "<p>" + albums.album_artist + "</p>" +
                    "</div>";


                $("#wrapper").append( div );
                console.log(div);

                })
            }});


$("#wrapper").on("click", "div", function(){
    $.ajax({
        url: "http://morad.rocks/player/api/album/" + $(this).data("id"),

        success: function ( response ){
            console.log( response )
            $("#clickedAlbum").removeClass("loading");
            $("#playlist").removeClass("loading");

            var ul = "<ol>";

            var playlist = response.playlist;

            $.each( playlist, function( index, song ) {
                ul += "<li data-song=" + song.path + ">" + song.name + "</li>";
            });

            ul += "</ol>";

            $("#playlist").html( ul );

            $("#playlist ol").fadeIn();
        }
    })

    });
