<html>

<head>
    <title> Authorization of user</title>
    <link rel="stylesheet" href="stye.css">
</head>

<body style="background-color: antiquewhite;">
    <div class="container">
        <form action="authenticate.php" method="POST">
            <div class="user-input">
                <label for="name">Name</label>
                <input type="text" name="name" required>
                <label for="age">Age</label>
                <input type="number" name="age" required>
            </div>
            <div class="btn-container">
            <input type="Submit" class="button" value="Submit">
            </div>
        </form>
    </div>
</body>

</html>
<!-- authenitcate.php -->