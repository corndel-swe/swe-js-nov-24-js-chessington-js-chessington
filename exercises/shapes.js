export class Shape {
  area() {
    throw new Error('This method should be overwritten')
  }

  perimeter() {
    throw new Error('This method should be overwritten')
  }
}

// Exercise 3: Make Rectangle, Triangle, and Circle child classes of Shape
// And override the getArea and getPerimeter methods

export class Rectangle {
  #width
  #height

  constructor(width, height) {
    this.#width = width
    this.#height = height
  }

  area() {
    return this.#width * this.#height
  }

  perimeter() {
    return 2 * (this.#width + this.#height)
  }

  width() {
    return this.#width
  }

  height() {
    return this.#height
  }
}

export class RightTriangle {
  #base
  #height

  constructor(base, height) {
    this.#base = base
    this.#height = height
  }

  base() {
    return this.#base
  }

  height() {
    return this.#height
  }

  hypotenuse() {
    return Math.sqrt(this.#base ** 2 + this.#height ** 2)
  }
}

export class Circle {
  #radius

  constructor(radius) {
    this.#radius = radius
  }

  radius() {
    return this.#radius
  }
}
