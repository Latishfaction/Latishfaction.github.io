function convert() {
    var num = document.forms["frm1"].num.value;
    document.forms["frm1"].words.value = "";
    if (isNaN(num)) {
        alert("please enter a valid number");
    }
    else if (num < 0 || num > 999) {
        alert("Number is Out of Range");
    }
    else {
        var len = num.length;
        var words = "";
        for (var i = 0; i < len; i++) {
            var n = num.substr(i, 1);
            switch (n) {
                case '0': words += "Zero "; break;
                case '1': words += "One "; break;
                case '2': words += "Two "; break;
                case '3': words += "Three "; break;
                case '4': words += "Four "; break;
                case '5': words += "Five "; break;
                case '6': words += "Six "; break;
                case '7': words += "Seven "; break;
                case '8': words += "Eight "; break;
                default: words += "Nine ";
            }
        }
        document.forms["frm1"].words.value = words;
    }
}