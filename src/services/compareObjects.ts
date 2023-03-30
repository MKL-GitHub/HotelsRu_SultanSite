function compareObjects(obj1: any, obj2: any): boolean {
    const obj1Props = Object.getOwnPropertyNames(obj1);
    const obj2Props = Object.getOwnPropertyNames(obj2);

    if (obj1Props.length !== obj2Props.length) return false;

    for (let i = 0; i < obj1Props.length; i++) {
        const propName = obj1Props[i];

        if (typeof obj1[propName] === 'object') {
            if (!compareObjects(obj1[propName], obj2[propName])) return false;
        } else {
            if (obj1[propName] !== obj2[propName])  return false;
        }
    }

    return true;
}

export default compareObjects;