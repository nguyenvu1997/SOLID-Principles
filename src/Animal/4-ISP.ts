// Violate Interface Segregation Principle
interface AnimalInterface {
    walk(): void;
    fly(): void;
    swim(): void;
}

// Interface Segregation Principle
interface CanWalk {
    walk(): void;
}

interface CanFly {
    fly(): void;
}

interface CanSwim {
    swim(): void;
}

export { CanWalk, CanFly, CanSwim };