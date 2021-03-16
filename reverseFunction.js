    function myReverse(param) {
        if (Array.isArray(param)) {
            var _tmp;
            var pLength = param.length
            for (var i = 0; i < param.length; i++) {
                if (i >= pLength) break;
                _tmp = param[i]
                param[i] = param[pLength - 1]
                param[pLength - 1] = _tmp
                pLength--
            }
            return param
        } else {
            console.error(param, "is not an Array !")
        }
    }
