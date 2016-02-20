<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Player</title>
    <link rel="stylesheet" href="css/Player.css">
</head>
<body>
    <div id="wrapper">
        <div id="clickedAlbum" class="loading">
            <button class="play">Play</button>
            <br/>

            <audio controls id="player">
                <source type="audio/mpeg" src="http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3">
            </audio>
            <br/>
            <div id="playlist" class="loading"></div>
        </div>
    </div>
    <script src="http://code.jquery.com/jquery-2.2.0.min.js"></script>
    <script src="js/Player.js"></script>
</body>
</html>
