---
{"publish":true,"aliases":["Github Actions - Execute Cleanup Step","Github Actions - Execute Step On Failure"],"created":"[[2026-01-12]]","modified":"2026-01-12T10:02:26.681+02:00","published":"[[2026-01-12]]","cssclasses":"","parent":"[[Github - Actions]]","state":["evergreen"],"date":"[[2026-01-12]]","relates":["[[Conditionals]]"]}
---

# Always

> [!success]+
> Just add `if: always()` to it.

```yaml
      - name: Cleanup Something
        if: always() # This makes it always execute
        run: make cleanup-something
```

# On Failure

> [!success]+
> Just add `if: failure()` to it.

```yaml
      - name: Cleanup Something
        if: failure() # This makes it execute if there was a failure in the stage
        run: make cleanup-something
```