---
{"publish":true,"created":"[[2024-06-16]]","modified":"2026-01-11T15:39:06.944+02:00","published":"[[2024-06-16]]","cssclasses":"","parent":"[[System Design]]","state":["evergreen"],"date":"[[2024-06-16]]","relates":["[[Graceful Degradation]]"]}
---

> [!info]+
> A Pattern of [[Error Handling]] where after too many failed attempts to perform an action, attempts will be stopped altogether and instead a cached or default response will be returned.


# Example

```ts
class CircuitBreaker {
    constructor({failureThreshold=3, successThreshold=2, timeout=5000}={}) {
        this.failureThreshold = failureThreshold;
        this.successThreshold = successThreshold;
        this.timeout = timeout;
        this.state = 'CLOSED';
        this.failureCount = 0;
        this.successCount = 0;
    }

    async call(fn) {
        if (this.state === 'OPEN') {
            return this.handleOpenState();
        }

        try {
            const res = await fn();
            this.successCount++;
            if (this.successCount >= this.successThreshold) {
                this.successCount = 0;
                this.failureCount = 0;
                this.state = 'CLOSED';
            }
            return res;
        } catch (e) {
            this.failureCount++;
            if (this.failureCount >= this.failureThreshold) {
                this.state = 'OPEN';
                setTimeout(() => {
                    this.state = 'HALF_OPEN';
                }, this.timeout);
            }
            throw e;
        }
    }

    handleOpenState() {
        throw new Error('Circuit is open');
    }
}
```

```ts
enum CircuitStates {
	OPEN,
	HALF_OPEN,
	CLOSED
}

class CircuitBreaker {
	private counters = new Map();
	constructor(
		private readonly failureTreshold = 5,
		private readonly refillTimeMs = 1111
	) { }

	call(fn: () => any) {
		const counter = this.createEmptyOrReturn(fn);
		const now = Date.now();

		const refillCount = Math.floor((now - counter.lastRefillTime) / this.refillTimeMs);

		if (refillCount > 0) {
			console.log(`Refilling with: ${refillCount}`);
			console.log(`now: ${now}, lastCallTime: ${counter.lastRefillTime}`);

			counter.lastRefillTime = Date.now();
			counter.tokens += refillCount;
		}

		if (counter.tokens == 0) {
			throw new Error("Handle me");
		}

		try {
			fn();
		} catch (e) {
			counter.tokens--;
		}
	}

	createEmptyOrReturn(fn: () => any): { tokens: number, lastRefillTime: number; } {
		if (!this.counters.has(fn)) {
			this.counters.set(fn, {
				tokens: this.failureTreshold,
				lastRefillTime: Date.now()
			});
		}
		return this.counters.get(fn);
	}
}
console.log("====================================== Start ===========================");

const test = new CircuitBreaker();

function testFunc() {
	throw new Error();
}

while (true) {
	try {
		test.call(testFunc);
	} catch (e) {
	}
}


console.log("====================================== End ===========================");
```