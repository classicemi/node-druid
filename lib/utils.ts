export function inherits(ctor: any, superCtor: any) {
  ctor._super = superCtor
  Object.setPrototypeOf(ctor.prototype, superCtor.prototype)
}
