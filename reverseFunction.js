function myReverse(param) {
    if (Array.isArray(param)) {

        let pLength = param.length;

        for (let i = 0; i < param.length; i++) {
            if (i >= pLength) break;

            [param[i], param[pLength - 1]] = [param[pLength - 1], param[i]];

            pLength--;
        }
        return param;
    } else {
        throw TypeError(`${param} is not an Array ! `);
    }
}
