    Array.prototype.removeItem = function(param) {
        let _arr = this;
        for (let i = 0; i <= _arr.length; i++) {
            if (_arr[i] == param) _arr.splice(i, 1)
        }
        return _arr
    }

    var testArr = [12, 56, "Yahya"]
    testArr.removeItem(56)
    console.log(testArr) // output : [12,"Yahya"]
