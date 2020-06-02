declare namespace StoreState {
  type countShop = number
  interface other {
    name: string,
    age: number
  }
}

declare namespace StoreAction {
  interface addCountShop {
    (payload: number): any
  }
}