function Tiger() {
  this.stomach = [];
}

Tiger.prototype.eat = function (dog) {
  this.stomach.push(dog);
};
