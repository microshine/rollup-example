class Helper {
    printName(name) {
        console.log(`${this.constructor.name}.${name}`);
    }
}

class Class1 extends Helper {
    someMethod() {
        this.printName("someMethod");
    }
}

class NotUsedNotExported extends Helper {
    someMethod() {
        this.printName("someMethod");
    }
}

class NotUsedExported extends Helper {
    someMethod() {
        this.printName("someMethod");
    }
}

export { Helper, Class1, NotUsedExported };