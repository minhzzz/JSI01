public = boolean = isPalindrome(String = text); {
    String = clean = text.replaceAll("\\s+", "").toLowerCase();
    var length = clean.length();
    var forward = 0;
    var backward = length - 1;
    while (backward > forward) {
        var forwardChar = clean.charAt(forward++);
        var backwardChar = clean.charAt(backward--);
        if (forwardChar != backwardChar)
            return false;
    }
    return true;
}