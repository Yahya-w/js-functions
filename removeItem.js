    Array.prototype.removeItem = function(item) {
    
        if (this.indexOf(item) !== -1) {
            this.splice(this.indexOf(item), 1)
            return this;
        } else {
            throw ReferenceError(`No value matching ${item} was found `);
        }
    
    }

