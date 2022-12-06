function appendAndDelete(s, t, k) {
    let i = 0;
    if (s.length < t.length) {
        if (k <= s.length)
            return "Yes";
        else
            return "No";

    }
    while (s[i] === t[i]) {
        if (!s[i]) break
        i++;
    }
    let a = s.length - i;
    let b = t.length - i;

    if (((a + b) <= k)){{
        return "Yes"
    }
    }
    return "No"

}
console.log(appendAndDelete("y", "yu", 1))