function addition(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return false;
    }
    return a + b;
}

module.exports = addition;