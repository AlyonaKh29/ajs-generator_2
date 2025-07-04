export function canIterate(obj) {
    if (obj == null) {
        return false;
    }
    const method = obj[Symbol.iterator];
    return typeof method === 'function';
}
