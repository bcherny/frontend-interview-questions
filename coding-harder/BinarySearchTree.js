class BinarySearchTree {

  constructor() {
    this.root = null
  }

  // O(n), where n is # nodes
  get(value) {
    let node = this.root
    while (node != null) {
      if (value === node.value) return node.value
      else if (value < node.value) node = node.left
      else node = node.right
    }
    return null
  }

  // O(n), where n is # nodes
  has(value) {
    return this.get(value) !== null
  }

  // O(n), where n is # nodes
  add(...values) {
    function _add(value, node) {
      if (node === null) return new Node(value)
      if (value < node.value) {
        node.left = _add(value, node.left)
      } else if (value > node.value) {
        node.right = _add(value, node.right)
      } else {
        node.value = value
      }
      return node
    }
    for (let value of values) {
      this.root = _add(value, this.root)
    }
  }

  // O(n), where n is # nodes
  size() {
    let _size = node => node === null ? 0 : 1 + _size(node.left) + _size(node.right)
    return _size(this.root)
  }

  // Hibbard deletion
  remove(value) {
    function _remove(value, node) {
      if (node === null) return null
      if (value < node.value) node.left = _remove(value, node.left)
      else if (value > node.value) node.right = _remove(value, node.right)
      else {
        if (node.right === null) return node.left
        if (node.left === null) return node.right

        let t = node
        node = min(t.right)
        node.right = removeMin(t.right)
        node.left = t.left
      }
      return node
    }

    function removeMin(node) {
      if (node.left === null) return node.right
      node.left = removeMin(node.left)
      return node
    }

    function min(node) {
      let curr = node
      while (curr.left !== null) curr = curr.left
      return curr
    }

    this.root = _remove(value, this.root)
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

/// tests

import { test } from 'ava'

test('BinarySearchTree', t => {
  let tree = new BinarySearchTree
  tree.add(1, 2, 3, 4)
  tree.add(5)
  t.is(tree.has(2), true)
  t.is(tree.has(5), true)
  tree.remove(3)
  t.is(tree.size(), 4)
})

test('BinarySearchTree#get', t => {
  let tree = new BinarySearchTree
  t.is(tree.get(42), null)
  tree.add(42, 43)
  t.is(tree.get(42), 42)
  t.is(tree.get(43), 43)
  t.is(tree.get(44), null)
})
