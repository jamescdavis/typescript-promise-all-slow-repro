type SlowConditional<T> = T extends string ? string : T;

// Uncomment and comment above to see "fast" compile times
// type SlowConditional<T> = T;

type SlowMap<T> = {
    [P in keyof T]: SlowConditional<T[P]>
};

// Uncomment and comment above to see "fast" compile times
// type SlowMap<T> = T;

export interface SlowType {
    // Uncomment and comment out method10 to see compile time reduced by an order of magnitude
    // method0<K extends keyof this>(key: K, arg: SlowConditional<this[K]>): SlowConditional<this[K]>;

    // Each of these adds ~3-5 additional seconds of compile time
    method1<T extends keyof this>(arg: T): Pick<SlowMap<this>, T>;
    method2<T extends keyof this>(arg: T): Pick<SlowMap<this>, T>;
    method3<T extends keyof this>(arg: T): Pick<SlowMap<this>, T>;
    method4<T extends keyof this>(arg: T): Pick<SlowMap<this>, T>;
    method5<T extends keyof this>(arg: T): Pick<SlowMap<this>, T>;
    method6<T extends keyof this>(arg: T): Pick<SlowMap<this>, T>;
    method7<T extends keyof this>(arg: T): Pick<SlowMap<this>, T>;
    method7<T extends keyof this>(arg: T): Pick<SlowMap<this>, T>;
    method9<T extends keyof this>(arg: T): Pick<SlowMap<this>, T>;

    method10<K extends keyof this>(arg: SlowConditional<this[K]>): SlowConditional<this[K]>;
 
    // Uncomment to triple compile time
    // method11<K extends keyof this>(key: K, arg: SlowConditional<this[K]>): SlowConditional<this[K]>;
}
