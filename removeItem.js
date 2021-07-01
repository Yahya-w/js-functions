    Array.prototype.removeItem = function(item) {
    
        if (this.indexOf(item) !== -1) {
            this.splice(this.indexOf(item), 1)
            return this;
        } else {
            throw ReferenceError(`No value matching ${item} was found `);
        }
    
    }
    
    let arr = [3, 4, 5, 2]
    arr.removeItem(2) // Output : [3, 4, 5] 
    arr.removeItem(0) // Output : Reference Error '0'

