---
{"publish":true,"aliases":["Kubernetes - DNS Debugging"],"description":"Check the link and follow.","created":"[[2025-03-14]]","modified":"2026-01-12T22:38:45.275+02:00","published":"[[2025-03-14]]","cssclasses":"","parent":"[[Kubernetes]]","state":["evergreen"],"date":"[[2025-03-14]]","relates":["[[Networking]]","[[Troubleshooting]]"],"links":["https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/"]}
---

Apply `dnsutils.yaml` and test. 

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: dnsutils
  namespace: default
spec:
  containers:
  - name: dnsutils
    image: registry.k8s.io/e2e-test-images/agnhost:2.39
    imagePullPolicy: IfNotPresent
  restartPolicy: Always
```
