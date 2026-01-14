---
publish: true
description: Probabilistic data structure to test if an element is a member of a set.
created: "[[2024-10-10]]"
modified: 2026-01-11T15:43:01.940+02:00
published: "[[2024-10-10]]"
cssclasses: ""
parent: "[[Performance]]"
state:
  - tree
date: "[[2024-10-10]]"
---

A **Bloom filter** is a probabilistic data structure used to test whether an element is a member of a set. It is highly space-efficient and fast but allows for false positives, meaning it may incorrectly indicate that an element is in the set when it's not. However, it guarantees no false negatives, so if the Bloom filter says an element is not in the set, it's definitely not.

# How it works:

- **Initialization**: A Bloom filter starts with a bit array of `m` bits, all set to 0.
- **Hash functions**: It uses `k` different hash functions to map elements to `k` positions in the bit array.

# Operations:

- **Insertion**: To add an element to the set, you pass it through the `k` hash functions. Each hash function generates an index, and you set the corresponding positions in the bit array to 1.
- **Lookup**: To check if an element is in the set, you pass it through the same `k` hash functions. If all `k` positions in the bit array are set to 1, the Bloom filter reports that the element is "probably" in the set. If any of the positions are 0, the element is definitely not in the set.

# Pros:

- **Space-efficient**: It requires significantly less memory compared to storing the actual elements.
- **Fast lookups and insertions**: Both operations are performed in constant time `O(k)`.

# Cons:

- **False positives**: There is a small probability that the Bloom filter will indicate an element is present even when it’s not, due to hash collisions.
- **No deletions**: Once an element is added, you cannot remove it without re-initializing the Bloom filter (although variations like Counting Bloom filters address this).

# Applications:

- **Web caches**: To quickly check if an item is in the cache without storing full metadata.
- **Databases**: To reduce disk I/O by checking if an entry might exist before performing expensive lookups.
- **Networking**: For routing or checking membership of large sets in distributed systems.

Bloom filters are widely used when memory efficiency is more critical than perfect accuracy.

# Example

```go
package main

import (
	"fmt"
	"hash/fnv"
)

// BloomFilter structure
type BloomFilter struct {
	size   uint
	bitset []bool
	hashes int
}

// NewBloomFilter initializes a Bloom filter
func NewBloomFilter(size uint, hashes int) *BloomFilter {
	return &BloomFilter{
		size:   size,
		bitset: make([]bool, size),
		hashes: hashes,
	}
}

// Add inserts an element into the Bloom filter
func (bf *BloomFilter) Add(item string) {
	for i := 0; i < bf.hashes; i++ {
		position := bf.hash(item, i) % bf.size
		bf.bitset[position] = true
	}
}

// Contains checks if an element might be in the set
func (bf *BloomFilter) Contains(item string) bool {
	for i := 0; i < bf.hashes; i++ {
		position := bf.hash(item, i) % bf.size
		if !bf.bitset[position] {
			return false
		}
	}
	return true
}

// Simple hash function
func (bf *BloomFilter) hash(item string, seed int) uint {
	h := fnv.New32a()
	h.Write([]byte(fmt.Sprintf("%d%s", seed, item)))
	return uint(h.Sum32())
}

func main() {
	// Initialize Bloom filter with size 1000 and 3 hash functions
	bf := NewBloomFilter(1000, 3)

	// Add items to the filter
	bf.Add("apple")
	bf.Add("banana")

	// Check if items are in the set
	fmt.Println("Contains apple?", bf.Contains("apple"))   // true
	fmt.Println("Contains banana?", bf.Contains("banana")) // true
	fmt.Println("Contains orange?", bf.Contains("orange")) // false
}
```

n the context of a Bloom filter, the **size** and **number of hash functions** determine the structure and behavior of the filter.

## 1. **Size (1000)**:

- This is the number of bits in the Bloom filter’s **bit array**. In this example, the bit array is initialized with 1000 bits, all set to 0 initially.
- A larger bit array allows the Bloom filter to store more elements while keeping the false positive rate lower. However, it also increases memory usage.

## 2. **Number of hash functions (3)**:

- The **number of hash functions** (`k = 3` in this case) **determines how many different positions in the bit array each element will map to when it's added or checked**.
- When an item is added, the Bloom filter uses these 3 different hash functions to generate 3 different indices in the bit array. It sets the corresponding bits at those indices to 1.
- When checking if an item is in the set, the same 3 hash functions are used to check if all 3 bits are set to 1. If they are, the item is _probably_ in the set; if any of the bits is 0, the item is definitely not in the set.

# Why these parameters matter:

- **Size (m)**: A larger size reduces the likelihood of hash collisions (i.e., different elements mapping to the same bit positions), thereby reducing the false positive rate.
- **Number of hash functions (k)**: Increasing the number of hash functions reduces the false positive rate up to a point, but too many hash functions can lead to too many bits being set, which may also increase the false positive rate over time.

The trade-off between the size of the bit array, the number of hash functions, and the number of elements to be inserted determines the false positive rate of the Bloom filter. A well-designed Bloom filter optimizes these values based on the expected number of elements and acceptable false positive probability.
